const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db.js')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validator.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)


app.listen(3001, () => {
    console.log('Backend  executando na porta 3001...')
})