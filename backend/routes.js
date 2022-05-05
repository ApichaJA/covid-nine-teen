const app = require('express')()
const authAPI = require('./services/auth/authAPI')
const thirdAPI = require('./services/thirds/thirdAPI')

app.use('/auth', authAPI)
app.use('/third', thirdAPI)

module.exports = app
