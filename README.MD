# ChineseMe server
The application is built with express.  
It is based on the [Express & ES6 REST API Boilerplate](https://github.com/developit/express-es6-rest-api).
Git repository available on [Gitlab](https://gitlab.com/b00461197/chinese-me-server).

## Development
```
$ npm install
$ npm run dev
```

## ESLint
ESLint config comes from https://github.com/rangle/react-redux-example/blob/master/.eslintrc
```
$ npm run lint
```

## Deployment
The app is deployed to Heroku.
```
$ heroku create chinese-me-server --remote production
$ heroku addons:create heroku-postgresql:hobby-dev --remote production
// Set environment variables on Heroku (IMPORTANT: need to be done before building)
$ git push production master
$ heroku run bash --remote production
$ sequelize db:migrate
$ exit
```

## Database

```js
/** connect to DB **/
$ psql -p5432 -d 'chinese-me' // development
$ heroku pg:psql --remote staging // staging
$ heroku pg:psql --remote production // production

/** useful commands **/
$ heroku pg:info
$ watch heroku pg:info
```

## Backups
Automatic daily backups of postgresql-animate-96069 are scheduled at 02:00 America/Los_Angeles.

## Admin interface
The project is relying on Forest Admin.
- development: http://app.forestadmin.com/9499
- staging: https://app.forestadmin.com/9558
- production: https://app.forestadmin.com/9563

## Environment variables
See .env.example file

Note: In order for Environment variables to be updated in the code after a change,
the app needs to be rebuilt. This can be done by pushing an empty commit like so:

```
$ git commit --allow-empty -m "empty commit"
$ git push heroku master
```

## Environments
- development - http://localhost:8080
- staging - https://frozen-temple-75832.herokuapp.com
- production - https://chinese-me-server.herokuapp.com

## Misc
- [Heroku: Upgrading Postgres DB](https://devcenter.heroku.com/articles/upgrading-heroku-postgres-databases)
- [Heroku: Scheduling Backups](https://devcenter.heroku.com/articles/heroku-postgres-backups#scheduling-backups)
- [Heroku: Renaming apps](https://devcenter.heroku.com/articles/renaming-apps)
- [Heroku: Deploying nodeJS](https://devcenter.heroku.com/articles/deploying-nodejs)
- [Heroku: Config vars](https://devcenter.heroku.com/articles/config-vars)
- [Heroku: Multiple environments](https://devcenter.heroku.com/articles/multiple-environments)
- [Sequelize: order on easter loading](http://stackoverflow.com/questions/29995116/ordering-results-of-eager-loaded-models-in-node-sequelize)
