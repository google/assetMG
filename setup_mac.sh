#!/usr/bin/env bash

# Keep-alive: update existing `sudo` time stamp until the script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

TITLECOLOR='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

#Installing homebrew
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Verifying Homebrew and dependencies"
echo "This might take a while to complete, as some formulae need to be installed from source"
echo "You'll need to provide administrator permission to install Brew"
echo "----------------------------------"
echo -e "${NC}"
if test ! "$(which brew)"; then
  # Ask for the administrator password upfront.
  echo "Installing homebrew..."
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  export PATH="/usr/local/opt/python/libexec/bin:$PATH"
  export PATH="/usr/local/bin:/usr/local/sbin:$PATH"
  sudo chown -R "$(whoami)" "$(brew --prefix)"/*
else
  echo -e "${GREEN}Homebrew already installed${NC}"
fi

sudo chown -R $(whoami) /usr/local/bin /usr/local/etc /usr/local/lib/pkgconfig /usr/local/sbin /usr/local/share /usr/local/share/doc /usr/local/share/man/man5 /usr/local/share/zsh

chmod u+w /usr/local/bin /usr/local/etc /usr/local/lib/pkgconfig /usr/local/sbin /usr/local/share /usr/local/share/doc /usr/local/share/man/man5 /usr/local/share/zsh

brew update

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Git"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#Installing python
brew list git || brew install git

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Python"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#Installing python
brew list python3 || brew install python3

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Node"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#Installing node
brew list node || brew install node

#Cleaning up old versions
brew cleanup

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Angular"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
#installing angular cli
npm install -g @angular/cli
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

#env setup
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Configuring Python environment"
echo "----------------------------------"
echo -e "${NC}"
python3 -m venv .venv
chmod 557 .venv/bin/activate
. .venv/bin/activate
export AC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing backend dependencies"
echo "----------------------------------"
echo -e "${NC}"
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
