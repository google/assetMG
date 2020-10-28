function Check-Python($python) {
	if (Get-Command $python -ErrorAction SilentlyContinue) {
		try {
			$ver = .$python "--version" | Out-String
			$ver = $ver.Substring("Python ".Length)
			#Trace-Command –Name CommandDiscovery –Expression {get-command $python} -PSHost
			$ver = [System.Version]::Parse($ver)
			return ($python, $ver)
		} catch {
			# the fact that we found python3 cmd doesn't mean it's real Python3, it can be some stupid shortcut for Microsoft Store
		}
	}
}
function Find-Python {
	$p = Check-Python("python3.exe")
	if ($p) { return $p }
	$p = Check-Python("python.exe")
	if ($p) { return $p }
}

# Detecting Python executable name and version
Write-Host -ForegroundColor DarkGray "Detecting Python"
($python, $ver) = Find-Python
if (!$ver) {
	Write-Host -ForegroundColor Red "Python wasn't found, please install it from python.org"
	exit(1)
}
if ($ver.Major -lt 3 -or ($ver.Major -eq 3 -and $ver.Minor -lt 6)) {
	$msg = "Found Python " + $ver.Major + "." + $ver.Minor + " but AssetMG requires 3.6 as minumum, please install it from python.org"
	Write-Host -ForegroundColor Red $msg
	exit(1)
}

$msg = "Found Python " + $ver.Major + "." + $ver.Minor
Write-Host -ForegroundColor DarkGray $msg

# Creating virtual environment
Write-Host -ForegroundColor DarkGray "Creating virtual environment"
.$python -m venv .venv
. .\.venv\Scripts\Activate.ps1 

# Installing dependencies via pip
if ($python -eq "python3") { 
	$pip = "pip3"
} else {
	$pip = "pip"
}

Write-Host -ForegroundColor DarkGray "Installing dependencies"
.$pip install --default-timeout=100 -r requirements.txt 

if( $LASTEXITCODE -eq 0 ) {
	Write-Host "All done, ready to run: $python assetMG.py"
}
