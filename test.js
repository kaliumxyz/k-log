import test from 'ava'
const log = require('./')

test('logging', t => {
	t.true(log("unit-test"))
})
