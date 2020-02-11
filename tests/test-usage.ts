const PubSub = require('../moxy-pubsub')

const chHandler = (data: any) => console.log(data)
PubSub.subscribe('channel', chHandler)

PubSub.publish('channel', 'this is a test')
