var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function callback(err, list) {
	var txtList = list.filter(function callback(word) {
		return path.extname(word) === '.' + process.argv[3];
	})
	txtList.forEach(function(element, index){
		console.log(element)
	})
})