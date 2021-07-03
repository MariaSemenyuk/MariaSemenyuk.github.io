const fishHavenJSON = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';
const fishHavenForesactJSON = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=2ecb8eb95419d049bfa52bf7b8d4678d';

fetch(fishHavenJSON)
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


    if (tempValue <= 90 && speedValue >= 0) {
      let s = Math.pow(speedValue, 0.16);
      windChill = 35,74 + 0.6215 * tempValue - 35.75 * s + 0.4275 * tempValue * s;
      windChill.toFixed(0);
      document.getElementById('windChill').innerHTML = windChill + ' &#176;F';
    } else {
      document.getElementById('windChill').innerHTML = 'N/A';
    }

  });




  fetch(fishHavenForesactJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    const daysNames = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    const today = new Date();

    const newList = jsObject.list.filter(newList =>
      newList.dt_txt.includes('18:00:00'));
    
      for (let i = 0; i < 5; i++) {
        let dayBlock = document.createElement('li');
        let dayName = document.createElement('span');
        let dayIcon = document.createElement('img');
        let dayTemp = document.createElement('span');
        dayBlock.appendChild(dayName);
        dayBlock.appendChild(dayIcon);
        dayBlock.appendChild(dayTemp);

        let dayIndex = today.getDay() + i + 1;
        if (dayIndex > 6) {
          dayIndex = dayIndex - 7;
        }
        dayName.textContent = daysNames[dayIndex];
        dayIcon.textContent = newList[i].weather[0].icon;
        dayIcon.setAttribute('src', 'https://openweathermap.org/img/wn/' + newList[i].weather[0].icon + '.png');
        dayIcon.setAttribute('alt', newList[i].weather[0].description);
        dayTemp.textContent = (newList[i].main.temp).toFixed(0) + ' °F';

        document.querySelector('.container ul').appendChild(dayBlock);

      }
  });