var fs = require('fs')
var fileName = process.argv[2]
fs.readFile(fileName, function callback(err, data) {
	var str = data.toString()
	var arr = str.split('\n')
	console.log(arr.length - 1)
})