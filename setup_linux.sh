#!/usr/bin/env bash

# Keep-alive: update existing `sudo` time stamp until the script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

TITLECOLOR='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color


#Installing homebrew
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Verifying package managers"
echo "You'll need to provide administrator permission to install"
echo "----------------------------------"
echo -e "${NC}"
sudo -v
sudo apt update
sudo apt-get update

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Git"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#Installing python
which git || sudo apt install git

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Python"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#Installing python
which python3 || sudo apt install python3.8
sudo apt install python3-pip

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Node"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#Installing node
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Angular"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#installing angular cli
sudo npm install -g @angular/cli
npm link @angular/cli

#configurating virtual env
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


echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Configuring Python environment"
echo "----------------------------------"
echo -e "${NC}"
sudo apt-get install python3-venv
sudo apt autoremove
python3 -m venv .venv
chmod 777 .venv/bin/activate
. .venv/bin/activate
export AC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing backend dependencies"
echo "----------------------------------"
echo -e "${NC}"
pip3 install --upgrade pip
pip3 install -r requirements.txt

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing frontend dependencies"
echo "----------------------------------"
echo -e "${NC}"
cd app/asset_browser/frontend
npm install
npm audit fix
cd ../../..

echo "-----------------------------------------------------------------------------------"
echo "Completed running setup.sh, restart your computer to ensure all updates take effect"
echo "-----------------------------------------------------------------------------------"
