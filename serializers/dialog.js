'use strict';
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const serializerOptions = require('./schemas/dialog');

module.exports = new JSONAPISerializer('dialogs', serializerOptions);
