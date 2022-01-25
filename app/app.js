console.log('hello')

// const axios = require('axios');
// axios.get('https://xivapi.com/character/search?name=[Venus Eros]&server=[Gilgamesh]')
// 3659532
axios.get('https://xivapi.com/character/3659532?data=AC,FR,FC,FCM,PVP')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data.Character.Avatar);
    // let venus_eros = response.data.Character.Avatar;
    let venus_eros = response.data.Character.Portrait;
    let character_name = response.data.Character.Name;
    let fc = response.data.Character.FreeCompanyName;
    let server = response.data.Character.Server;
    $('#venus_eros').append('<img src="' + venus_eros + '">');
    $('#venus_eros').append('<p> Character Name: ' + character_name + '</p>');
    $('#venus_eros').append('<p> Free Company: ' + fc + '</p>');
    $('#venus_eros').append('<p> Server: ' + server + '</p>');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log('is this thing on inside the axios get')
  });