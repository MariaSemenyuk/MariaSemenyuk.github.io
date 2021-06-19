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

    function townCard(i, jsonIndex) {
      townName[i].innerHTML = towns[jsonIndex].name;
      townMotto[i].innerHTML = towns[jsonIndex].motto;
      townYear[i].innerHTML = 'Year Founded: ' + towns[jsonIndex].yearFounded;
      townPopulation[i].innerHTML = 'Population: ' + towns[jsonIndex].currentPopulation;
      townRain[i].innerHTML = 'Annual Rian Fall: ' + towns[jsonIndex].averageRainfall;
    }

    townCard(0, 0);
    townCard(1, 6);
    townCard(2, 2);
  });