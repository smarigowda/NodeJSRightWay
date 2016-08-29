const fs = require('fs')

const filename = process.argv[2]

if (!filename) {
	throw Error('file name must be provided on the command line')
}

const stream = fs.createReadStream(filename)

stream.on('data', chunk => {
	process.stdout.write(chunk)
})

stream.on('error', error => {
	process.stderr.write(`ERROR: ${error.message} \n`)
})
