import subprocess
import os
from pathlib import Path

backend_path = Path('app/backend/')

venv_install = subprocess.run(['python3 -m venv .venv'], shell=True)
venv_start = subprocess.run('. .venv/bin/activate', shell=True)

install_deps = subprocess.run('pip3 install -r requirements.txt', shell=True)

os.chdir(backend_path)
run_server = subprocess.run(['python3', 'server.py'])