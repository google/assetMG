TITLECOLOR='\033[0;35m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Updating project"
echo "----------------------------------"
echo -e "${NC}"
git pull

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Starting frontend"
echo "----------------------------------"
echo -e "${NC}"
cd app/asset_browser/frontend
ng build

cd ../../..
echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "Starting backend"
echo "----------------------------------"
echo -e "${NC}"
. .venv/bin/activate
python3 assetMG.py &

echo -e "${TITLECOLOR}"
echo "----------------------------------"
echo "${GREEN}AssetMG is running on http://127.0.0.1:5000/"
echo "Open or refresh this address to access${TITLECOLOR}"
echo "----------------------------------"
echo -e "${NC}"