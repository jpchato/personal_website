const axios = require('axios');

axios.get('https://xivapi.com/item/1675?private_key=9518c8b308d749f09ed6c90b84952950f7d81b0db19d4cbbb06db6a228801194')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });