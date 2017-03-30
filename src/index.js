import config from './config/config'; // eslint-disable-line no-unused-vars

import express from 'express';
import bodyParser from 'body-parser';

import { sequelize } from './models';
import users from './routes/users';
import auth from './routes/auth';

const app = express();

app.use(bodyParser.json());

// Forest Admin setup
app.use(require('forest-express-sequelize').init({
  modelsDir: __dirname + '/models',
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  sequelize
}));

// Enable CORS to allow requests from the client
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server is running on port ' + port)); // eslint-disable-line no-console
