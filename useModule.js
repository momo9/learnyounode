var mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], function (err, data) {
	data.forEach(function(element, index){
		console.log(element)
	})
})