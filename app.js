import config from './config'; // eslint-disable-line no-unused-vars
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sequelize } from './models';

const app = express();

// TODO: Only allow JSON, see Forest example
app.set('json spaces', 2);
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

// Enable CORS to allow requests from the client and ForestAdmin
// Also allow S3, but this should be improved to make it more specific
const clientOrigins = process.env.CLIENT_URLS.split(',');
const adminOrigins = ['http://app.forestadmin.com', 'https://app.forestadmin.com'];
const corsOptions = {
  origin: clientOrigins.concat(adminOrigins),
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
};

app.use(cors(corsOptions));
// enable pre-flight across-the-board:
app.options('*', cors(corsOptions));

// Forest Admin setup
app.use(require('forest-express-sequelize').init({
  modelsDir: __dirname + '/models',
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  sequelize
}));

// Register custom routes
require('./routes')(app);

// Errors handling
app.use((err, req, res, next) => {
  if (err.message) {
    let { message } = err;
    const { status } = err;

    // NOTICE: Display the first error message if it is a Sequelize validation
    //         error message.
    if (err && err.errors && err.errors[0] && err.errors[0].message) {
      message = err.errors[0].message;
    }

    res
    .status(err.status || 400)
    .send({ errors: [{ status, message }] });
  }
  res.status(400).send(err);
  next(err);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server is running on port ' + port)); // eslint-disable-line no-console
