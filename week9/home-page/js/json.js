const jsonURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

let townName = document.getElementsByClassName('townName');
let townMotto = document.getElementsByClassName('townMotto');
let townYear = document.getElementsByClassName('townYear');
let townPopulation = document.getElementsByClassName('townPopulation');
let townRain = document.getElementsByClassName('townRain');

fetch(jsonURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    // console.table(jsonObject);
    for (let i = 0; i < towns.length; i++ ) {
      townName[i].innerHTML = towns[i].name;
      townMotto[i].innerHTML = towns[i].motto;
      townYear[i].innerHTML = 'Year Founded: ' + towns[i].yearFounded;
      townPopulation[i].innerHTML = 'Population: ' + towns[i].currentPopulation;
      townRain[i].innerHTML = 'Annual Rian Fall: ' + towns[i].averageRainfall;
    }
  });