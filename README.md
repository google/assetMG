# assetMG

Centralized asset management platform for UAC

**This is not an officially supported Google product.**

Contact: eylong@google.com

## Why?

Creative assets are only accessible in the Ad-group level, 
Which makes managing UAC assets a manual job and creates significant overhead.

## What?

Easily add, change or remove creative assets across different ad groups and campaigns.


## Requirements

- Access to AdWords API (refer to
  [Apply for access to the AdWords API](https://developers.google.com/adwords/api/docs/guides/signup)).
- OAuth 2 credentials (refer to
  [Generate OAuth2 credentials](https://developers.google.com/adwords/api/docs/guides/authentication#create_a_client_id_and_client_secret)).
- [Enable Google ads API](https://developers.google.com/google-ads/api/docs/first-call/oauth-cloud-project#enable_the_in_your_project)


## Setup

### Recommended way

For simplest installation experience we recommend using the following commands on supported platforms (Windows, MacOS, Linux (Debian)).  

#### Installation
Execute a following command in a folder under which you want to have AssetMG installation. E.g. the user's home.

**Windows:** put the command into cmd.exe ran as administrator [Guide](https://grok.lsu.edu/article.aspx?articleid=16850)
```shell
powershell -exec bypass -c "(New-Object Net.WebClient).Proxy.Credentials=[Net.CredentialCache]::DefaultNetworkCredentials;iwr('https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_windows.ps1')|iex"
```
or if you're in PowerShell (should be ran as administrator as well):
```powershell
(New-Object Net.WebClient).Proxy.Credentials=[Net.CredentialCache]::DefaultNetworkCredentials;iwr('https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_windows.ps1')|iex
```
NOTE: the script will fail if executed in non-administative command prompt.

**MacOS:**
```shell
curl https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_macos.command | bash -s
```

**Linux:**
```shell
curl https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_linux.sh | bash -s
```

#### Running the app
After a setup script completes all you need to do is run a "run" script from within AssetMG folder:
* Windows: `win_run.cmd`  
* MacOS: `AssetMG.command` (double-clickable)
* Linux: `run_unix.sh`   

On Windows the setup script creates a shortcut on the desktop (AssetMG.lnk).


### Advanced/manual way
This section contains all technical details about installing in case you either want to understand it thoroughly or setup scripts aren't suitable for you for any reason. Normally we'd suggest using the setup script from [Recommended way](#recommended-way).  

Basically all you need to run the app is:  

* have/install Python >=3.7
* have/install NodeJS
* clone the repo from GitHub (https://github.com/google/assetMG.git)
* install server (Python) dependencies via `pip`
* install front-end (npm) dependencies via `npm`
* build Angular app (run `ng build` in app/asset_browser/frontend)
* run `python3 assetMG.py`

The setup scripts do the heavy-lifting on checking for installed software (Python, Git, NodeJS), their versions (we need Python 3.7 or later), install missing components, etc.

The setup scripts install Python globably if it finds that currently installed version is below 3.7. If you need to keep you global version we recommand using [pyenv](https://github.com/pyenv/pyenv):
```shell
curl https://pyenv.run | bash
pyenv install 3.7.7
pyenv global 3.7.7
```
After that you'll need to execute `pyenv init` to instruction on how to update your shell config.

A similar approach exists for NodeJS - to keep your current NodeJS use [NVM](https://github.com/nvm-sh/nvm).


If we leave aside installion of required software (you can do it in whatether way you want), to setup and run the app for the first time execute the following block in the Terminal in a folder with cloned repository:  
```shell
python3 -m venv .venv
. .venv/bin/activate
pip3 install -r requirements.txt
cd app/asset_browser/frontend
npm install
node_modules/.bin/ng build
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
python3 assetMG.py
```

For Windows, the only difference will be is how you activate venv:
`.venv\Scripts\activate.bat` (instead of `. .venv/bin/activate`), all other steps are the same.

#### Steps Breakdown

0. Open Terminal/CMD and navigate to the folder where you cloned the GitHub repositoty.

1. Create a virtual environment
[virtualenv](https://virtualenv.pypa.io/en/latest/) to isolate the Python
environment and libraries:

  ```shell
  python3 -m venv .venv
  ```
  then, for mac/linux:
  ```shell
  . .venv/bin/activate
  ```  
  for windows:
  ```shell
  .venv\Scripts\activate.bat
  ```  

2. Install required Python packages:

  ```shell
  pip3 install -r requirements.txt
  ```
3. Build the front-end app"
  ```shell
  cd app/asset_browser/frontend
  npm install
  node_modules/.bin/ng build
  ```
4. Run the app
  ```shell
  python3 assetMG.py
  ```
  
  if you get the following error:
  ```
  ValueError: unknown locale: UTF-8
  ```
  Please enter these lines in the console:
  ```shell
  export LC_ALL=en_US.UTF-8
  export LANG=en_US.UTF-8
  ```

#### Running the App

After the first installation, in order to run the app just open the terminal/console, navigate to the app's directory and:

For MacOS/Linux, copy the following block and paste in the Terminal:

```shell
. .venv/bin/activate
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
python3 assetMG.py
```

For Windows, copy the following block and paste in the Console:

```shell
.venv\Scripts\activate.bat
python3 assetMG.py
```

But each time you update the repository (`git pull`) you'll need to reinstall Python (`pip3 install -r requirements.txt`) and npm dependencies (`npm i`), and rebuild Angular app (`ng build`).


## Managing Universal App Campaigns' assets.

Choose an account from the accounts list on the top.
You will get a view of all the assets under that account.
Use the filter and search bars at the top to look for assets.
Once you click on an asset, you can browse the different camapiagns and adgroups and choose
to which adgroups you want to assign/remove the asset to.
Once you done, click the 'Update' button, and move on to the next asset.


