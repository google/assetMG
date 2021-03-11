#!/usr/bin/env bash

# Keep-alive: update existing `sudo` time stamp until the script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

TITLECOLOR='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

cd "$(dirname "$BASH_SOURCE")" || {
  echo "Error getting current directory" >&2
  exit 1
}

# Installing homebrew
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
  xcode-select --install
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  export PATH="/usr/local/opt/python/libexec/bin:$PATH"
  export PATH="/usr/local/bin:/usr/local/sbin:$PATH"
  sudo chown -R "$(whoami)" "$(brew --prefix)"/*
else
  echo -e "${GREEN}Homebrew already installed${NC}"
fi

sudo chown -R $(whoami) /usr/local/bin /usr/local/etc /usr/local/lib/pkgconfig /usr/local/sbin /usr/local/share /usr/local/share/doc /usr/local/share/man/man5 /usr/local/share/zsh /usr/local/lib/node_modules

chmod u+w /usr/local/bin /usr/local/etc /usr/local/lib/pkgconfig /usr/local/sbin /usr/local/share /usr/local/share/doc /usr/local/share/man/man5 /usr/local/share/zsh /usr/local/lib/node_modules

brew update

# Installing Git
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Git"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
brew list git || brew install git


# Checking version/Installing Python
python3_installed() {
  local a b
  a=$(python3 --version 2>&1 | perl -pe 's/python *//i') ; b="3.7"
  [ "$( (echo "$a" ; echo "$b") | sort -V | head -1)" == "$b" ]
}
if python3_installed ; then 
  echo "Detected Python >= 3.7"
else
  echo -e "${TITLECOLOR}"
  echo "----------------------------------"
  echo "Installing Python"
  echo "This might take a while to complete"
  echo "----------------------------------"
  echo -e "${NC}"
  # NOTE: this will actually installs the latest version (not the version we detected)
  # Potentially this can breaks things on the user machine.
  # Probably we should use pyenv to workaround this
	brew install python3
fi


# Installing NodeJS
# echo -e "${TITLECOLOR}"
# echo "----------------------------------"
# echo "Installing Node"
# echo "This might take a while to complete"
# echo "----------------------------------"
# echo -e "${NC}"
# brew list node || brew install node

# Cleaning up old versions
brew cleanup

# Downloading application
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
# NOTE: we're now inside 'assetMG' folder

# Configurating virtual env
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Configuring Python environment"
echo "----------------------------------"
echo -e "${NC}"
python3 -m venv .venv
. .venv/bin/activate
# NOTE: after moving to python 3.8 these one line can be removed
export AC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

# Installing dependencies via pip
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing backend dependencies"
echo "----------------------------------"
echo -e "${NC}"
python3 -m pip install -r requirements.txt

# Installing frontend dependencies
# echo -e "${TITLECOLOR}"
# echo "----------------------------------"
# echo "Installing frontend dependencies"
# echo "----------------------------------"
# echo -e "${NC}"
# cd app/asset_browser/frontend
# npm install
# node_modules/.bin/ng build
# cd ../../..
# NOTE: we're now inside 'assetMG' folder

# Prepare the run script
mv scripts/AssetMG.command ./
chmod 777 scripts/AssetMG.command

echo "-----------------------------------------------------------------------------------"
echo -e "${GREEN} All done, to start the app please run AssetMG.command or python main.py${TITLECOLOR}"
echo "-----------------------------------------------------------------------------------"
