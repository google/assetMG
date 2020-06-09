import subprocess
import os
from pathlib import Path
import argparse
import sys
# from app.backend.server import server
from google_auth_oauthlib.flow import InstalledAppFlow
from googleads import adwords
import yaml
import pip
import platform

config_file = 'config.yaml'

def get_refresh_token():
  with open(config_file, 'r') as f:
    credentials = yaml.safe_load(f)
  client_config = {
      'installed': {
          'client_id': credentials['client_id'],
          'client_secret': credentials['client_secret'],
          'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
          'token_uri': 'https://accounts.google.com/o/oauth2/token',
      }
  }
  flow = InstalledAppFlow.from_client_config(
      client_config, scopes=['https://www.googleapis.com/auth/adwords'])
  flow.redirect_uri = 'urn:ietf:wg:oauth:2.0:oob'
  auth_url, _ = flow.authorization_url(prompt='consent')

  print('Log into the Google Account you use to access your AdWords account '
        'and go to the following URL: \n%s\n' % auth_url)
  print('After approving the token enter the verification code (if specified).')
  code = input('Code: ').strip()

  try:
    flow.fetch_token(code=code)
  except InvalidGrantError as ex:
    print('Authentication has failed: %s' % ex)
    sys.exit(1)

  credentials['refresh_token'] = flow.credentials.refresh_token
  with open(config_file, 'w') as f:
    yaml.dump(credentials, f, default_flow_style=False)

def main():

    backend_path = Path('app/backend/')

    running_os = platform.system()

    shell_bol = False
    if running_os == 'Windows':
      shell_bol=True
    
    os.chdir(backend_path)
    run_server = subprocess.run(['python','server.py'], shell=shell_bol)


if __name__ == '__main__':

  parser = argparse.ArgumentParser(prog='assetMG')

  group = parser.add_mutually_exclusive_group()
  group.add_argument('-a', '--auth', action='store_true', default=False,
                     help=('authenticate in Google Ads and store refresh'
                           ' token in the credentials file'))

  args = parser.parse_args()
  if args.auth:
    get_refresh_token()
  else:
    main()