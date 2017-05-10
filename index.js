const fs = require('fs')

function log(text) {
	text = JSON.stringify(new Date()) + " - " + text + "\n"
	console.log(text)
	const stream = fs.createWriteStream('log', { flags: 'a', defaultEncoding: 'utf8' })
	stream.write(text)
	return true
}

module.exports = log