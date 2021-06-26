// const prestonJSON = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';
// const fishHavenJSON = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';
// const sodaSpringsJSON = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';


fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    // console.table(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });