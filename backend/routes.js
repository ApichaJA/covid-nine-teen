const app = require('express')()
const authAPI = require('./services/auth/authAPI')

app.use('/auth', authAPI)

module.exports = app
