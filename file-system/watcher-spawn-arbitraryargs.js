"use strict"

const fs = require('fs')
const filename = process.argv[2]
const { spawn } = require('child_process')

if (!filename) {
	throw Error('A file to watch must be specified on the command line')
}

// fs.watch('target.txt', () => { // this is not consistent across platform
fs.watchFile(filename, () => { // consistent across platforms, but bit slow
	// let ls = spawn('ls', ['-lh', filename])
	let rest = process.argv.slice(3)
	console.log(rest)
	let ls = spawn('ls', [].concat.apply(rest,[filename]))
	ls.stdout.pipe(process.stdout)
	// console.log(`the file ${filename} just changed`)
})

console.log(`now watching ${filename} for changes...`)