#!/usr/bin/env bash

# Keep-alive: update existing `sudo` time stamp until the script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

TITLECOLOR='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color


# Updating apt-get packages
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Verifying package managers"
echo "You'll need to provide administrator permission to install"
echo "----------------------------------"
echo -e "${NC}"
sudo -v
sudo apt update
sudo apt-get update

# Installing Git
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing Git"
echo "This might take a while to complete"
echo "----------------------------------"
echo -e "${NC}"
which git || sudo apt install git

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
  # NOTE: this will replace the Python3 installed on user machine and
  # potentially this can breaks things.
  # Probably we should use pyenv to workaround this.
	sudo apt install python3.8
fi


# Installing NodeJS
# echo -e "${TITLECOLOR}"
# echo "----------------------------------"
# echo "Installing Node"
# echo "This might take a while to complete"
# echo "----------------------------------"
# echo -e "${NC}"
# curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
# sudo apt-get install -y nodejs
# sudo apt-get install -y npm

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

#configurating virtual env
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Configuring Python environment"
echo "----------------------------------"
echo -e "${NC}"
sudo apt-get install python3-venv
sudo apt autoremove
python3 -m venv .venv
. .venv/bin/activate
# NOTE: after moving to python 3.8 these one line can be removed
export AC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Installing backend dependencies"
echo "----------------------------------"
echo -e "${NC}"
python3 -m pip install -r requirements.txt

# echo -e "${TITLECOLOR}"
# echo "----------------------------------"
# echo "Installing frontend dependencies"
# echo "----------------------------------"
# echo -e "${NC}"
# cd app/asset_browser/frontend
# npm install
# node_modules/.bin/ng build
# cd ../../..
# # NOTE: we're now inside 'assetMG' folder

# Prepare the run script
mv scripts/run_unix.sh ./
chmod 777 scripts/run_unix.sh

var1=$(pwd)

cd ..
cat > AssetMGLauncher.desktop << EOF1
#!/usr/bin/env xdg-open
[Desktop Entry]
Version=1.0
Type=Application
Terminal=true
Exec=sh -c "cd $var1; ./run_unix.sh"
Name=AssetMG
Comment=Manage your assets easily
EOF1

echo "-----------------------------------------------------------------------------------"
echo -e "${GREEN}All done, to start the app please run run_unix.sh or python main.py${TITLECOLOR}"
echo "-----------------------------------------------------------------------------------"
