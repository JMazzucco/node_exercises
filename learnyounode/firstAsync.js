var fs = require('fs')
var buf = undefined

function countLines() {
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
 		var error = err
	  buf = fileContents
	  var str = buf.toString().split('\n').length - 1
		console.log(str);
	})
};

countLines()


