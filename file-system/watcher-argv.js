const fs = require('fs')
const filename = process.argv[2]

if (!filename) {
	throw Error('A file to watch must be specified on the command line')
}

// fs.watch('target.txt', () => { // this is not consistent across platform
fs.watchFile(filename, () => { // consistent across platforms, but bit slow
	console.log(`the file ${filename} just changed`)
})

console.log(`now watching ${filename} for changes...`)