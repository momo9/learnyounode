var http = require('http')
var url = require('url')

var port = +process.argv[2]

function parse(iso) {
    var date = new Date(iso)
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function unix(iso) {
    var date = new Date(iso)
    return {
        unixtime: date.getTime()
    }
}

var server = http.createServer(function (req, res) {
    var parsed = url.parse(req.url, true)
    var pathname = parsed['pathname']
    var iso = parsed.query.iso
    var json = null

    res.writeHead(200, {'content-type': 'application/json'})
    if (/^\/api\/parsetime/.test(pathname)) {
        json = JSON.stringify(parse(iso))
    } else if (/^\/api\/unixtime/.test(pathname)) {
        json = JSON.stringify(unix(iso))
    }
    
    if (json) {
        res.write(json)
    } else {
        res.write(JSON.stringify({error: '404'}))
    }
    res.end()
})
server.listen(port)