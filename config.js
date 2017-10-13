'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

if (['staging', 'production'].indexOf(process.env.NODE_ENV) === -1) {
  require('dotenv').load();
}
