'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const serializerOptions = require('./schemas/word');

module.exports = new JSONAPISerializer('words', serializerOptions);
