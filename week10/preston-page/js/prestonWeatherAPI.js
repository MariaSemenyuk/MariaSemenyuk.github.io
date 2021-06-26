const prestonJSON = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';


fetch(prestonJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    // console.table(jsObject);
    const tempValue = jsObject.main.temp;
    const speedValue = jsObject.wind.speed;
    let windChill;


    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('airTemperature').textContent = tempValue.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = speedValue.toFixed(0);


    if (tempValue <= 90 && speedValue >= 3) {
      let s = Math.pow(speedValue, 0.16);
      windChill = 35,74 + 0.6215 * tempValue - 35.75 * s + 0.4275 * tempValue * s;
      windChill.toFixed(0);
      document.getElementById('windChill').innerHTML = windChill + ' &#176;F';
    } else {
      document.getElementById('windChill').innerHTML = 'N/A';
    }
  });