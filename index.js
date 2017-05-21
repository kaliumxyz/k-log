const fs = require('fs')

// Logs the current date and a string (text) to a file named log in the same dir.
class logger{
	constructor(text, filename = 'log.log', formatting = true, print = true) {

		if (formatting)
			text = JSON.stringify(new Date()) + " - " + text + "\n"
		if (print)
			console.log(text)
		const stream = fs.createWriteStream(filename, { flags: 'a', defaultEncoding: 'utf8' })
		stream.write(text)
		
}
}

// legacy support
function log(text, filename = 'log.log', formatting = true, print = true){
	if (formatting)
		text = JSON.stringify(new Date()) + " - " + text + "\n"
	if (print)
		console.log(text)
	const stream = fs.createWriteStream(filename, { flags: 'a', defaultEncoding: 'utf8' })
	stream.write(text)
	return true
}

module.exports = {log, logger}