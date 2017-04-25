'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const serializerOptions = require('./schemas/grammar');

module.exports = new JSONAPISerializer('grammars', serializerOptions);
