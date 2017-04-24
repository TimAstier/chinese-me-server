'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const serializerOptions = require('./schemas/char');

module.exports = new JSONAPISerializer('chars', serializerOptions);
