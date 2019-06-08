cd H:\Data\Code\media-hatch\Deploy\win10-x64
start node media-hatch-server/dist/server.js
timeout /t 5
cd mediahatchservices
start dotnet MediaHatchServices.dll
timeout /t 5
cd ../media-hatch
start node app.js
start firefox "http://localhost:2020/