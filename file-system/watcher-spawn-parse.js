"use strict"

const fs = require('fs')
const { spawn } = require('child_process')
const filename = process.argv[2]
if (!filename) {
	throw Error('A file to watch must be specified on the command line')
}

// fs.watch('target.txt', () => { // this is not consistent across platform
fs.watchFile(filename, () => { // consistent across platforms, but bit slow
	
	let ls = spawn('ls', ['-lh', filename])

	let output = ''

	ls.stdout.on('data', chunk => {
		output += chunk.toString()
	})

	ls.on('close', () => {
		console.log(output)
	})
	// ls.stdout.pipe(process.stdout)
	// console.log(`the file ${filename} just changed`)
})

console.log(`now watching ${filename} for changes...`)