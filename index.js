'use strict'
const fs = require('fs')
const EventEmitter = require('events')


// Logs the current date and a string (text) to a file named log in the same dir.
class logger extends EventEmitter {
	constructor(filename = 'logs.log', formatting = true, print = true, ...callback) {
		super()
		this.stream = fs.createWriteStream(filename, { flags: 'a', defaultEncoding: 'utf8' })
		this.formatting = formatting
		this.filename = filename
		this.print = print
		this.write = this.stream.write
		this.stream.on('open', data => {
			this.emit('open')
			if (callback)
				callback.forEach(f => f(data))
		})
		this.stream.on('close', _=>this.emit('close'))
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

		if (callback)
			callback.forEach(f => f())
		return true

	}
	l(){
		arguments.forEach(arg => log(arg))
		return true
	}
}

module.exports = logger