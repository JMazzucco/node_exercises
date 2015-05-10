
var fs = require('fs')

function extFilter() {
	fs.readdir(process.argv[2], function doneReading(err, list) {

		for (var i = 0; i < list.length; i++){
			if (process.argv[3] === list[i].split('.').pop() && list[i].match(/\./)) {
				console.log(list[i]);
			}
		};
	});
};

extFilter()

