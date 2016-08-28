const fs = require('fs')

fs.writeFile('target2.txt', 'a witty message', err => {
	if (err) {
		throw err
	}
	console.log('File saved!')
})