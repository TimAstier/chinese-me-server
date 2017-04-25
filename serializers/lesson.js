'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const serializerOptions = require('./schemas/lesson');

module.exports = new JSONAPISerializer('lessons', serializerOptions);
