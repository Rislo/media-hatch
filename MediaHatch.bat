cd Deploy
start node media-hatch-server/dist/server.js
timeout /t 5
cd mediahatchservices
start MediaHatchServices.exe
timeout /t 5
cd ../media-hatch
start node app.js
start chrome "http://localhost:2020/