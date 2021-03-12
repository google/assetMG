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
  git clone https://github.com/google/assetMG.git
  cd assetMG
fi

# Create app engine for project if not exist
gcloud app create

# Describe to get the URL
$(gcloud app describe --format=config[export])

# Update server.yaml
echo "hostname: $defaultHostname" > server.yaml
echo "port: 443" >> server.yaml
echo "cloud: true" >> server.yaml
echo "bucket_name: $defaultBucket" >> server.yaml

# Waiting for details to propagate
echo "Waiting 30 seconds before deploying..."
sleep 30

# Deploying to cloud
gcloud app deploy
