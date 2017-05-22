'use strict'
const fs = require('fs')

// Logs the current date and a string (text) to a file named log in the same dir.
class logger{
	constructor(filename = 'log.log', formatting = true, print = true, ...callback) {
		this.stream = fs.createWriteStream(filename, { flags: 'a', defaultEncoding: 'utf8' })
		this.formatting = formatting
		this.filename = filename
		this.print = print
		this.write = this.stream.write
		this.stream.on('open', _=> {
			if (callback)
			this.call(...callback)
	})
		// this.stream.on('close', _=>console.log('write close'))
	}

	log(text, filename, formatting = this.formatting, print = this.print, ...callback){

		if (formatting)
			text = JSON.stringify(new Date()) + " - " + text + "\n"
		if (print)
			console.log(text)

		if(filename){
		fs.createWriteStream(filename, { flags: 'a', defaultEncoding: 'utf8' }).write(text)
		} else
		this.stream.write(text)

		this.call(...callback)
		return true

	}
	call(...callback) {
		if (callback)
			try {
				callback.forEach(e => e())
			} catch (e) {
				console.error(`Your callback function(s) threw the following error: `, e)
			}
	}
}

module.exports = logger