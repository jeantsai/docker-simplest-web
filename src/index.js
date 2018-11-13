const http = require('http')
const os = require('os')

/**
 * Demo Web Server
 * 
 * A simplest web server for demo in container world
 */

const demoVersion = process.env.SM_DEMO_VERSION || 'default'
const port = process.env.SM_PORT || 3000

const prompt = `Demo μService - Ver:${demoVersion} on ${os.hostname}`

var count = 0

var handler = function (req, rsp) {
    console.log("Received request from " + req.connection.remoteAddress)
    rsp.writeHead(200)
    rsp.end(prompt + " received request from " + req.connection.remoteAddress + "\n")
}

console.log(prompt + " is listening on " + port + " ...")
http.createServer( handler ).listen( port )
