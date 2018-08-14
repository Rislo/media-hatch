function Resolve-MsBuild {
    $msb2017 = Resolve-Path "${env:ProgramFiles(x86)}\Microsoft Visual Studio\*\*\MSBuild\*\bin\msbuild.exe" -ErrorAction SilentlyContinue
    if ($msb2017) {
        Write-Host "Found MSBuild 2017 (or later)."
        Write-Host $msb2017
        return $msb2017
    }

    $msBuild2015 = "${env:ProgramFiles(x86)}\MSBuild\14.0\bin\msbuild.exe"

    if (-not (Test-Path $msBuild2015)) {
        throw 'Could not find MSBuild 2015 or later.'
    }

    Write-Host "Found MSBuild 2015."
    Write-Host $msBuild2015

    return $msBuild2015
}
function Get-ScriptDirectory { Split-Path $MyInvocation.ScriptName }

$scriptDirectory = Get-ScriptDirectory

$msBuild = Resolve-MsBuild

$slnFilePath = Join-Path $scriptDirectory "Backend\DotNet\MediaHatchServices.sln";

$restoreArgs = $slnFilePath, "/t:restore", "/p:Configuration=Release"

Write-Host "Restoring nuget packages for $($slnFilePath)" -foregroundcolor green
Start-Process $msBuild $restoreArgs -NoNewWindow -Wait

$rebuildArgs = $slnFilePath, "/t:rebuild", "/p:Configuration=Release"

Write-Host "Building $($slnFilePath)" -foregroundcolor green
Start-Process $msBuild $rebuildArgs -NoNewWindow -Wait

$releaseDirectory = Join-Path $scriptDirectory "Backend\DotNet\MediaHatchServices\bin\Release"

$deployDirectory = Join-Path $scriptDirectory "Deploy\mediahatchservices"

Start-Process robocopy ($releaseDirectory, $deployDirectory, "/s") -NoNewWindow -Wait

$serverDirectory = Join-Path $scriptDirectory "Backend\media-hatch-server"

Set-Location $serverDirectory

Start-Process npm ("install") -NoNewWindow -Wait

$tsConfigPath = Join-Path $scriptDirectory "Backend\media-hatch-server\tsconfig.json"

$tscArgs = "-p", $tsConfigPath

Start-Process tsc $tscArgs -NoNewWindow -Wait

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