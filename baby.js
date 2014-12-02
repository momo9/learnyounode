var ret = 0
for (var i = 2; i < process.argv.length; i++) {
	ret += +process.argv[i]
}
console.log(ret)