# ChineseMe server
The application is built with express.  
It is based on the [Express & ES6 REST API Boilerplate](https://github.com/developit/express-es6-rest-api).

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
heroku create chiese-me-server --remote production
git push production master
heroku addons:create heroku-postgresql:hobby-dev --remote production
```

## Database
```js
/** connect to DB **/
psql -p5432 -d 'chinese-me' // development
heroku pg:psql --remote staging // staging
heroku pg:psql --remote production // production
```

## Environment variables
See .env.example file

Note: In order for Environment variables to be updated in the code after a change,
the app needs to be rebuilt. This can be done by pushing an empty commit like so:

```
git commit --allow-empty -m "empty commit"
git push heroku master
```

## Environments
- development - http://localhost:8080
- staging - https://
- production - https://

## Misc
- Upgrading Heroku Postgres DB: https://devcenter.heroku.com/articles/upgrading-heroku-postgres-databases
- // TODO: Schedule backups

## TODO
- [ ]
