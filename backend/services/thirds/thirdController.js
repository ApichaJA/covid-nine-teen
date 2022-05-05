const router = require("express").Router();

const { fetchNewCase, fetchHospital } = require('./third.service')

const getNewCase = async (req, res) => {
  try {
    const response = await fetchNewCase()
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
};

const getHospital = async (req, res) => {
  try {
    const response = await fetchHospital()
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
};

module.exports = {
  getNewCase,
  getHospital
};
