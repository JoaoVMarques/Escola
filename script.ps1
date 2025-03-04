$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$frontEndPath = Join-Path $scriptPath "front-end"
$backEndPath = Join-Path $scriptPath "back-end"

Start-Process -NoNewWindow -WorkingDirectory $frontEndPath -FilePath "powershell" -ArgumentList "-NoExit", "-Command npm run dev"

Start-Sleep -Seconds 2

$backEndScript = @"
cd "$backEndPath"
. .\.venv\Scripts\activate
py -m school
"@

Start-Process -NoNewWindow -WorkingDirectory $backEndPath -FilePath "powershell" -ArgumentList "-NoExit", "-Command $backEndScript"
