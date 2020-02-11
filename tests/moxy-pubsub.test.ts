import assert from 'assert'
const PubSub = require('../moxy-pubsub')

describe('PubSub test suite', () => {
	it('should subscribe to a channel', () => {
		const chHandler = (data: any) => assert.equal(data, 'this is a test')
		const sub = PubSub.subscribe('channel', chHandler)
		PubSub.publish('channel', 'this is a test')
		sub.unsubscribe()
	})
})
