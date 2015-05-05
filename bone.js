"use strict";

var Redis = require('ioredis');

module.exports = function attachEvents(skinny, options) {
    skinny.redis = new Redis(options);

    skinny.on('*initialize', function *initializeMongoose() {
        yield skinny.redis.connect();
    });

    skinny.on('*shutdown', function *shutdownMongoose() {
        yield redis.disconnect();
    });
};