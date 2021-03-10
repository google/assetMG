from googleapiclient.discovery import build
import json
import app.backend.setup as setup


YT_URL_PREFIX = 'https://www.youtube.com/watch?v='
YT_CONFIG = '/tmp/yt-config.json'
YT_CONFIG_GS = 'yt-config.json'

def get_all_yt_videos():
  setup.download_file_from_gcs(YT_CONFIG_GS, YT_CONFIG)
  with open(YT_CONFIG, 'r') as f:
    yt_config = json.load(f)

  channel_id = yt_config['channel_id']
  api_key = yt_config['api_key']
  videos = []

  youtube = build('youtube','v3',developerKey=api_key, cache_discovery=False)

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
                                        part='snippet',
                                        maxResults=50,
                                        pageToken=next_page_token).execute()

    for item in vids['items']:
      video_id = item['snippet']['resourceId']['videoId']
      videos.append({
          'id': video_id,
          'name':item['snippet']['title'] ,
          'thumbnail':item['snippet']['thumbnails']['default']['url'],
          'url': YT_URL_PREFIX + video_id
      })

    next_page_token = vids.get('nextPageToken')
    # print(vids)
    if next_page_token is None:
      break


  return videos

def test_yt_credentials(channel,key):
  youtube = build('youtube','v3',developerKey=key)

  youtube.channels().list(
      id=channel,
      part='contentDetails').execute()
      