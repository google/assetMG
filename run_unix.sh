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
UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
  echo "Project up to date"
elif [ $LOCAL = $BASE ]; then
  git pull
  cd app/asset_browser/frontend
  npm install
  node_modules/.bin/ng build
  cd ../../..
fi

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Starting backend"
echo "----------------------------------"
echo -e "${NC}"
. .venv/bin/activate
python3 assetMG.py

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo -e "${GREEN}AssetMG is running on http://127.0.0.1:5000/"
echo -e "Open or refresh this address to access${TITLECOLOR}"
echo "----------------------------------"
echo -e "${NC}"