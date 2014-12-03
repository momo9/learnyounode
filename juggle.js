var http = require('http')
var bl = require('bl')

var arr = []
var over = 0

function addString(err, str, order, limit) {
    if (err) {
        return console.error(err)
    }

    arr[order] = str
    over++
    if (over == limit) {
        arr.forEach(function(element, index){
            console.log(element)
        })
    }
}

function juggle(url, order, limit, callback) {
    http.get(url, function (resp) {
        resp.setEncoding('utf8')
        resp.pipe(bl(function (err, data) {
            if (err) {
                return callback(err)
            }
            callback(null, data.toString(), order, limit)
        }))
    })
}

var len = process.argv.length - 2
process.argv.slice(2).forEach(function(element, index){
    juggle(element, index, len, addString)
})
