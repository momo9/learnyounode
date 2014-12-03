var net = require('net')

function zeroFill(num) {
	return ((num < 10) ? '0' : '') + num
}

function now() {
	var date = new Date()
	return date.getFullYear() + '-' 
	    + zeroFill(date.getMonth() + 1) + '-' 
	    + zeroFill(date.getDate()) + ' ' 
	    + zeroFill(date.getHours()) + ':' 
	    + zeroFill(date.getMinutes())
}

var server = net.createServer(function (socket) {
	socket.write(now() + '\n')
	socket.end()
})
server.listen(+process.argv[2])
