const http = require('http')
const os = require('os')

/**
 * Demo Web Server
 * 
 * A simplest web server for demo in container world
 */

const demoVersion = process.env.SM_DEMO_VERSION || 'default'
const port = process.env.SM_PORT || 3000

const prompt = "Demo μService"

var count = 0

var handler = function (req, rsp) {
    console.log("Received request from " + req.connection.remoteAddress)
    rsp.setHeader('Content-Type', 'text/plain; charset=utf-8')
    rsp.writeHead(200)
    rsp.end(prompt + "\n===============================" +
        "\nVersion: " + demoVersion +
        "\nLocal Host: " +  os.hostname +
        "\nRemote Address: " + req.connection.remoteAddress + 
        "\nX-Forwarded-Host: " + req.headers['x-forwarded-host'] +
        "\nX-Forwarded-For: " + req.headers['x-forwarded-for'] +
        "\nX-Real-IP: " + req.headers['x-real-ip']
    )
}

console.log(prompt + " is listening on " + port + " ...")
http.createServer( handler ).listen( port, '0.0.0.0' )
