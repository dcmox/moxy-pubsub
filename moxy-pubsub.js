var subscribers = {};
module.exports = {
    publish: function (event, data) {
        if (!subscribers[event]) {
            return false;
        }
        subscribers[event].forEach(function (subscriberCallback) {
            return subscriberCallback(data);
        });
        return true;
    },
    subscribe: function (event, callback) {
        if (!subscribers[event]) {
            subscribers[event] = [];
        }
        var index = subscribers[event].push(callback) - 1;
        return {
            unsubscribe: function () {
                subscribers[event].splice(index, 1);
            }
        };
    }
};
