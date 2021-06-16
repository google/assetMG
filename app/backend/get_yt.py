from google.ads.googleads import client
from googleapiclient.discovery import build
import json
import yaml
import app.backend.setup as setup
from app.backend.setup import YT_CONFIG, YT_CONFIG_GS, CONFIG_FILE_PATH
from google.oauth2.credentials import Credentials
import google_auth_oauthlib.flow


YT_URL_PREFIX = 'https://www.youtube.com/watch?v='
ALLOWED_STATUS = ['unlisted', 'public']

def get_all_yt_videos():
  setup.download_file_from_gcs(YT_CONFIG_GS, YT_CONFIG)
  with open(YT_CONFIG, 'r') as f:
    yt_config = json.load(f)

  with open(CONFIG_FILE_PATH, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)

  client_id = config['client_id']
  client_secret = config['client_secret']
  refresh_token = config['refresh_token']

  channel_id = yt_config['channel_id']

  videos = []
  
  info = {
    "client_id":client_id,
    "client_secret":client_secret,
    "refresh_token":refresh_token
  }
  
  credentials = Credentials.from_authorized_user_info(info)

  youtube = build('youtube','v3',credentials=credentials, cache_discovery=False)

  channels = youtube.channels().list(
      id=channel_id,
      part='contentDetails').execute()

  #Check if channel was found. Return empty list if not
  if not channels.get('items'):
    return videos


  uploads_pl_id = channels['items'][0]['contentDetails']['relatedPlaylists']['uploads']

  next_page_token = None

  while 1:
    vids = youtube.playlistItems().list(playlistId=uploads_pl_id,
                                        part='snippet, status',
                                        maxResults=50,
                                        pageToken=next_page_token).execute()

    for item in vids['items']:
      if item['status']['privacyStatus'] in ALLOWED_STATUS:
        video_id = item['snippet']['resourceId']['videoId']
        videos.append({
            'id': video_id,
            'name':item['snippet']['title'] ,
            'thumbnail':item['snippet']['thumbnails']['default']['url'],
            'url': YT_URL_PREFIX + video_id
        })

    next_page_token = vids.get('nextPageToken')

    if next_page_token is None:
      break


  return videos

