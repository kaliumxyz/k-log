import test from 'ava'
let logger = require('./')
logger = new logger()
let log = logger.log.bind(logger)

test('log 1 arg', t => {
	t.true(log("unit-test"))
})

test('log 2 arg', t => {
	t.true(log("unit-test", "test.log"))
})

test('log 3 arg', t => {
	t.true(log("unit-test", "test.log", true))
})