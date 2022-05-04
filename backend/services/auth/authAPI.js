const app = require('express')()
// const authenticateUser = require('../../lib/auth/verifyToken')

const { getAccounts, accountLogin, accountLogout } = require('./authController')

app.route('/account')
  .get(getAccounts) // get all accounts route
  .post() // create account route

app.post('/account/login', accountLogin) // Log in route
app.post('/account/logout', accountLogout) // log out route

module.exports = app
