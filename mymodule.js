module.exports = function (pathname, ext, callback){
    var fs = require('fs')
    var path = require('path')
    fs.readdir(pathname, function (err, data) {
        if (err) {
            return callback(err)
        }
        var filtered = data.filter(function (e) {
            return path.extname(e) === '.' + ext
        })
        callback(null, filtered)
    })
}
