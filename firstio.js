var fs = require('fs')
var fileName = process.argv[2]
var buf = fs.readFileSync(fileName)
var str = buf.toString()
var arr = str.split('\n')
console.log(arr.length - 1)