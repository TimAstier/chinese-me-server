'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const serializerOptions = require('./schemas/episode');

module.exports = new JSONAPISerializer('episodes', serializerOptions);
