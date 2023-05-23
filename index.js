const https = require('https')
const fs = require('fs')

const options = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem')
}

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end("This server is running with HTTPS")
}).listen(8080);

console.log("Server is running on port:8080");