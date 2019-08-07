cd C:\Data\Code\media-hatch\Deploy\media-hatch-server\dist
start node server.js
timeout /t 5
cd ../../media-hatch
start node app.js
start firefox "http://localhost:2020/