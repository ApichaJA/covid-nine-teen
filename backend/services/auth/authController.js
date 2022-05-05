const router = require("express").Router();

const { login } = require('./auth.service')

const accountLogin = async (req, res) => {
  
  if (!req.body) {
    res.status(500).send(new Error('Empty Body'))
  }
  const { email, password } = req.body
  try {
    const loginStatus = await login(email, password)
    console.log(loginStatus)
    res.send(loginStatus)
  } catch (e) {
    console.log(e)
    res.status(401).send(e)
  }
};

module.exports = {
  accountLogin,
};
