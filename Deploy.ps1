function Get-ScriptDirectory { Split-Path $MyInvocation.ScriptName }

$scriptDirectory = Get-ScriptDirectory

$serverDirectory = Join-Path $scriptDirectory "Backend\media-hatch-server"

Set-Location $serverDirectory

Start-Process npm ("install") -NoNewWindow -Wait

Start-Process npm ("run", "build") -NoNewWindow -Wait

$distDirectory = Join-Path $scriptDirectory "Backend\media-hatch-server\dist"

$deployDirectory = Join-Path $scriptDirectory "Deploy\media-hatch-server\dist"

Start-Process robocopy ($distDirectory, $deployDirectory, "/s", "/xf *.js.map") -NoNewWindow -Wait

$modulesDirectory = Join-Path $scriptDirectory "Backend\media-hatch-server\node_modules"

$deployDirectory = Join-Path $scriptDirectory "Deploy\media-hatch-server\node_modules"

Start-Process robocopy ($modulesDirectory, $deployDirectory, "/s") -NoNewWindow -Wait

$appDirectory = Join-Path $scriptDirectory "Frontend\media-hatch"

Set-Location $appDirectory

Start-Process npm ("install") -NoNewWindow -Wait

Start-Process ng ("build", "--prod") -NoNewWindow -Wait

$distDirectory = Join-Path $scriptDirectory "Frontend\media-hatch\dist"

$deployDirectory = Join-Path $scriptDirectory "Deploy\media-hatch\dist"

Start-Process robocopy ($distDirectory, $deployDirectory, "/s") -NoNewWindow -Wait

$deployDirectory = Join-Path $scriptDirectory "Deploy\media-hatch"

Start-Process robocopy ($appDirectory, $deployDirectory, "app.js") -NoNewWindow -Wait

Set-Location $deployDirectory

Start-Process npm ("install", "express") -NoNewWindow -Wait