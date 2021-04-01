require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

const { SERVER_PORT, DB_STRING } = process.env;

massive({
    connectionString: DB_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () =>
      console.log(`DB is up & Server killing it on port ${SERVER_PORT}`)
    )
}).catch(err => {
    console.log(err)
});