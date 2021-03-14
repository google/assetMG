# assetMG

Centralized asset management platform for UAC

## Disclaimer

**This is not an officially supported Google product.**

Copyright 2021 Google LLC. This solution, including any related sample code or data, is made available on an “as is,” “as available,” and “with all faults” basis, solely for illustrative purposes, and without warranty or representation of any kind. This solution is experimental, unsupported and provided solely for your convenience. Your use of it is subject to your agreements with Google, as applicable, and may constitute a beta feature as defined under those agreements.  To the extent that you make any data available to Google in connection with your use of the solution, you represent and warrant that you have all necessary and appropriate rights, consents and permissions to permit Google to use and process that data.  By using any portion of this solution, you acknowledge, assume and accept all risks, known and unknown, associated with its usage, including with respect to your deployment of any portion of this solution in your systems, or usage in connection with your business, if at all.


Contact: eylong@google.com

## Why?

Creative assets are only accessible in the Ad-group level, 
Which makes managing UAC assets a manual job and creates significant overhead.

## What?

Easily add, change or remove creative assets across different ad groups and campaigns.


## Requirements

- Access to AdWords API (refer to
  [Apply for access to the AdWords API](https://developers.google.com/adwords/api/docs/guides/signup)).
- OAuth 2 credentials for **web application**(refer to
  [Generate OAuth2 credentials](https://developers.google.com/adwords/api/docs/guides/authentication#generate_oauth2_credentials)).
  - If you are doing a local deployment (not on cloud) add http://localhost:5000 to the credentials "Authorized JavaScript Origins" and "Authorized redirect" URIs. 
  - If you are deploying on cloud, add the app's URI after deployment.
- [Enable Google ads API](https://developers.google.com/google-ads/api/docs/first-call/oauth-cloud-project#enable_the_in_your_project)


## Setup

### Recommended way

For simplest installation experience we recommend using the following commands on supported platforms (Windows, MacOS, Linux (Debian)).  

#### Installation
Execute a following command in a folder under which you want to have AssetMG installation. E.g. the user's home.

**Windows:** put the command into cmd.exe ran as administrator [Guide](https://grok.lsu.edu/article.aspx?articleid=16850)
```shell
powershell -exec bypass -c "(New-Object Net.WebClient).Proxy.Credentials=[Net.CredentialCache]::DefaultNetworkCredentials;[System.Net.ServicePointManager]::SecurityProtocol = 'Tls,Tls11,Tls12'; iwr -Uri 'https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_windows.ps1' -UseBasicParsing|iex"
```
or if you're in PowerShell (should be ran as administrator as well):
```powershell
(New-Object Net.WebClient).Proxy.Credentials=[Net.CredentialCache]::DefaultNetworkCredentials;[System.Net.ServicePointManager]::SecurityProtocol = 'Tls,Tls11,Tls12'; iwr -Uri 'https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_windows.ps1' -UseBasicParsing|iex
```
NOTE: the scripts will fail if executed in non-administative command/PS prompt.

:warning: On Windows if you're running script directly in PowerShell then you need to make sure script execution is enable (`Get-ExecutionPolicy` doesn't return "Restricted"). If it's not you'll get an error "File ..ps1 cannot be loaded because running scripts is disabled on the system.". To overcome this either change the execution policy via `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` or run scripts via cmd (with `powershell -ExecutionPolicy Bypass "PS commands"`).

:point_up: to quickly run PowerShell prompt in a folder of choice just go to that folder in Windows Explorer then click "Open Windows PowerShell as administrator" in File menu in the Explorer's ribbon.

**MacOS:**
```shell
curl https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_macos.command | bash -s
```

**Linux:**
```shell
curl https://raw.githubusercontent.com/google/assetMG/master/scripts/setup_linux.sh | bash -s
```

**Google Cloud (AppEngine):**

* Create a new cloud project
* Open cloud shell. Make sure your new project is selected (gcloud config set project your-project)
* Run the following command and follow the installation wizard.

```shell
curl https://raw.githubusercontent.com/google/assetMG/master/scripts/deploy_cloud.sh | bash -s
```
* Once the app is deployed, you should see the url to access it.
* Alternatively, run "gcloud app browse" to open your app or get the URL.
* Don't forget to whitelist the URL for your credentials (see OAuth2 steps to create client-id/client-secret for a web app)

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
* have/install NodeJS (compatible with Angular cli's version used in the project - see in front-end folder)
* clone the repo from GitHub (https://github.com/google/assetMG.git)
* install server (Python) dependencies via `pip` (still the recommended way to do it in a virtual environment)
* Optional - build frontend locally (compiled FE is already in repo):
  * install front-end (npm) dependencies via `npm install`
  * build Angular app (run `ng build` in app/asset_browser/frontend)
* run `python3 main.py` to start the backend

The setup scripts do the heavy-lifting on checking for installed software (Python, Git, NodeJS), their versions (we need Python 3.7 or later), install missing components, etc.

The setup scripts install Python globably if it finds that currently installed version is below 3.7. If you need to keep you global version we recommand using [pyenv](https://github.com/pyenv/pyenv):
```shell
curl https://pyenv.run | bash
pyenv install 3.7.7
pyenv global 3.7.7
```
After that you'll need to execute `pyenv init` to get instructions on how to update your shell config.

A similar approach exists for NodeJS - to keep your current global NodeJS use [NVM](https://github.com/nvm-sh/nvm).


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
python3 main.py
```

For Windows, the only difference will be is how you activate venv:
`.venv\Scripts\activate.bat` (instead of `. .venv/bin/activate`), all other steps are the same (though `export`s commands are not needed).

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
3. Build the front-end app (optional)
  ```shell
  cd app/asset_browser/frontend
  npm install
  node_modules/.bin/ng build
  ```
4. Run the app
  ```shell
  python3 main.py
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
python3 main.py
```

For Windows, copy the following block and paste in the Console:

```shell
.venv\Scripts\activate.bat
python3 main.py
```

But each time you update the repository (`git pull`) you'll need to reinstall Python (`pip3 install -r requirements.txt`) and npm dependencies (`npm i`), and rebuild Angular app (`ng build`).


## Managing Universal App Campaigns' assets.

Choose an account from the accounts list on the top.
You will get a view of all the assets under that account.
Use the filter and search bars at the top to look for assets.
Once you click on an asset, you can browse the different camapiagns and adgroups and choose
to which adgroups you want to assign/remove the asset to.
Once you done, click the 'Update' button, and move on to the next asset.


