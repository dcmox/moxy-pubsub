var PubSub = require('../moxy-pubsub');
var chHandler = function (data) { return console.log(data); };
PubSub.subscribe('channel', chHandler);
PubSub.publish('channel', 'this is a test');
