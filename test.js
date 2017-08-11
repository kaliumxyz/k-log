'use strict'
const {test} = require('ava')
const fs = require('fs')
const path = require('path')

/* constructing logger */
const logStream = fs.createWriteStream(path.join(__dirname, `test.log`), { flags: 'a' })
const log = require('.')(logStream)

/* testing object type support */
test('log 1 arg', t => {
	log('One string.')
	t.pass('Didn\'t throw.')
})

test('log 2 arg', t => {
	log('Two','strings')
	t.pass('Didn\'t throw.')
})

test('log 5 arg', t => {
	log('A','whole','lot','of','strings')
	t.pass('Didn\'t throw.')
})

test('log 1 JSON object', t => {
	log({"one": "object"})
	t.pass('Didn\'t throw.')
})

test('log 2 JSON object', t => {
	log({
		"one": "object",
		"another": "object"
	})
	t.pass('Didn\'t throw.')
})

test('log 5 JSON object', t => {
	log({
		"one": "object",
		"another": "object",
		another: "object",
		"another": "object",
		another: "object"
	})
	t.pass('Didn\'t throw.')
})

test('log Array object', t => {
	log([])
	log([])
	t.pass('Didn\'t throw.')
})

test('log Array object with contents', t => {
	log(['wat'])
	log(['wat','wat',NaN,Infinity])
	t.pass('Didn\'t throw.')
})