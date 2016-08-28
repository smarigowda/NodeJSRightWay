const fs = require('fs')

// fs.watch('target.txt', () => {
fs.watchFile('target.txt', () => {
	console.log('the file target.txt just changed')
})

console.log('now watching target.txt for changes...')