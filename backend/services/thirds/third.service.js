const axios = require('axios');

const fetchNewCase = () => {
  return new Promise(async (resolve, reject) => {
    await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then((res) => {
      resolve(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
})
}

const fetchHospital = () => {
  return new Promise(async (resolve, reject) => {
    await axios.get('https://covid-lab-data.pages.dev/latest.json')
    .then((res) => {
      resolve(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
})
}

module.exports = {
  fetchNewCase,
  fetchHospital,
};
