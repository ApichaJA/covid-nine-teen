const app = require('express')()

const { getNewCase, getHospital } = require('./thirdController')

app.get('/newcase', getNewCase)
app.get('/hospital', getHospital) 

module.exports = app
