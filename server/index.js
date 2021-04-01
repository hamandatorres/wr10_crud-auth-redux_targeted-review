require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session')
const jokesCtrl = require('./controllers/jokesController')
const authCtrl = require('./controllers/authController');
const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env;

app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
  })
)

//auth endpoints
app.post('/auth/register', authCtrl.register); // req.body
app.post('/auth/login', authCtrl.login); // req.body
app.delete('/auth/logout', authCtrl.logout); // receive no data
app.get('/auth/session', authCtrl.getSession); // receive no data

// jokes endpoints
app.get('/api/jokes', jokesCtrl.getJokes);
app.post('/api/jokes', jokesCtrl.addJoke);
app.put('/api/jokes/:joke_id', jokesCtrl.editJokes);
app.delete('/api/jokes/:joke_id', jokesCtrl.deleteJoke);


massive({
    connectionString: DB_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => {
      console.log(`DB is up & Server killing it on port ${SERVER_PORT}`)
    })
}).catch(err => {
    console.log(err)
});