const jsonURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(jsonURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    // console.table(jsonObject);
    for (let i = 0; i < towns.length; i++ ) {
      let townName = towns[i].name;
      let townMotto = towns[i].motto;
      let townYear = towns[i].yearFounded;
      let townPopulation = towns[i].currentPopulation;
      let townRain = towns[i].averageRainfall;

      document.getElementsByClassName('townName').innerHTML = townName;




      // document.querySelector('div.cards').appendChild(card);
    }
  });