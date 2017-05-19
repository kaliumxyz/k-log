const fs = require('fs')

// Logs the current date and a string (text) to a file named log in the same dir.
function log(text, fileName, formatting) {

	filename = filename || "log"

	if (!formatting)
	text = JSON.stringify(new Date()) + " - " + text + "\n"

	console.log(text)
	const stream = fs.createWriteStream(filename, { flags: 'a', defaultEncoding: 'utf8' })
	stream.write(text)
	return true
}

module.exports = log