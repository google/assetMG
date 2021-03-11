#!/usr/bin/env bash

TITLECOLOR='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

cd "$(dirname "$BASH_SOURCE")" || {
  echo "Error getting current directory" >&2
  exit 1
}

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Updating project"
echo "----------------------------------"
echo -e "${NC}"
git fetch
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u})
BASE=$(git merge-base @ @{u})

if [ $LOCAL = $REMOTE ]; then
  echo "Project is up-to-date"
elif [ $LOCAL = $BASE ]; then
  echo "Project needs to be refreshed"
  git pull
  . .venv/bin/activate
  python3 -m pip install -r requirements.txt
  # cd app/asset_browser/frontend
  # npm install
  # node_modules/.bin/ng build
  # cd ../../..
fi

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Starting backend"
echo "----------------------------------"
echo -e "${NC}"
. .venv/bin/activate
# NOTE: after moving to python 3.8 these one line can be removed
export AC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
python3 main.py

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo -e "${GREEN}AssetMG is running on localhost:5000/"
echo -e "Open or refresh this address to access${TITLECOLOR}"
echo "----------------------------------"
echo -e "${NC}"
