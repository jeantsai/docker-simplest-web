const http = require('http')
const os = require('os')

const args = require('minimist')(process.argv.slice(2), {
    alias: {
        v: 'version',
        p: 'port',
    }
})
console.log(args['version'])
const version = args['version'] || 'default'

const prompt = `DEMO V${version} (${os.hostname})`
const port = args['port'] || 3000
var count = 0

var handler = function (req, rsp) {
    console.log("Received request from " + req.connection.remoteAddress)
    rsp.writeHead(200)
    rsp.end(prompt + " received request from " + req.connection.remoteAddress + "\n")
}

console.log(prompt + " is listening on " + port + " ...")
http.createServer( handler ).listen( port )
