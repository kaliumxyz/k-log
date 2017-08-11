'use strict'
/**
 * Constructs the log function.
 * @param {writeStream} stream 
 */
function logger(stream){
	return (...text) => {
		text.map(text => {
			console.log(text)
			stream.write(`${Date.now()} - ${JSON.stringify(text)}\n`)
		})
	}
}
module.exports = logger