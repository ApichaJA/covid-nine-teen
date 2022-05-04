
const express = require("express")
const cors = require('cors')

const routes = require('./routes')
// const authAPI = require('./services/auth/authAPI')

const app = express()
app.use(cors())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
// API Endpoints
app.get('/', (req, res) => {
    res.send('Please use /api Before Path ')
  })
app.use('/api', routes)
// app.use('/auth', authAPI)

module.exports = app
