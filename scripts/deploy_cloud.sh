#!/usr/bin/env bash

#Downloading application
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Downloading updated application"
echo "----------------------------------"
echo -e "${NC}"
DIR="assetMG"
if [ -d "$DIR" ]; then
  ### Project exists, updating ###
  cd assetMG
  git pull
else
  ### Project didn't exist, cloning ###
  # git clone with correct code to be updated
  # git clone https://github.com/google/assetMG.git
  cd assetMG
fi

# Create app engine for project if not exist
gcloud app create

# Describe to get the URL
$(gcloud app describe --format=config[export])
echo $defaultHostname
echo $defaultBucket

# Update server.yaml
echo $PWD
echo "hostname: $defaultHostname" > server.yaml
echo "port: 443" >> server.yaml
echo "cloud: true" >> server.yaml
echo "bucket_name: $defaultBucket" >> server.yaml

# Deploying to cloud
gcloud app deploy