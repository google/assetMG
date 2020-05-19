import yaml

VERSION = 'v201809'

class Service_Class:

  @staticmethod
  def get_ad_service(client):
    return client.GetService('AdService', version=VERSION)

  @staticmethod
  def get_campaign_service(client):
    return client.GetService('CampaignService', version=VERSION)

  @staticmethod
  def get_managed_customer_service(client):
    return client.GetService('ManagedCustomerService', version=VERSION)

  @staticmethod
  def get_ad_group_service(client):
    return client.GetService('AdGroupService', version=VERSION)

  @staticmethod
  def get_ad_group_ad_service(client):
    return client.GetService('AdGroupAdService', version=VERSION)

  @staticmethod
  def get_asset_service(client):
    return client.GetService('AssetService', version=VERSION)

  @staticmethod
  def reset_cid(client):
    with open('../config/googleads.yaml', 'r') as f:
      config = yaml.load(f, Loader=yaml.FullLoader)
    
    cid = config['adwords']['client_customer_id']
    client.SetClientCustomerId(cid)
