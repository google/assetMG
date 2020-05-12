# Lint as: python3
"""setup module for the assetMG tool.

setting up both api config yaml files(googleads.yaml & google-ads.yaml)
with the paramaters given by the user in the config.yaml file
"""

import yaml
import os


def set_api_configs():
  """set API configuration files."""

  with open('../../config.yaml', 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)

  aw_config = {'adwords': config}
  with open('../config/googleads.yaml', 'w') as f:
    yaml.dump(aw_config, f)

  config['login_customer_id'] = config['client_customer_id']
  with open('../config/google-ads.yaml', 'w') as f:
    yaml.dump(config, f)


