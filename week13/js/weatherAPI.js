const weatherJSON = 'https://api.openweathermap.org/data/2.5/weather?id=2673730&units=metric&appid=2ecb8eb95419d049bfa52bf7b8d4678d';
const weatherForesactJSON = 'https://api.openweathermap.org/data/2.5/forecast?id=2673730&units=metric&appid=2ecb8eb95419d049bfa52bf7b8d4678d';

fetch(weatherJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    // console.table(jsObject);
    const tempValue = jsObject.main.temp;

    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('airTemperature').textContent = tempValue.toFixed(0) + '°C';
    document.getElementById('humidity').textContent = jsObject.main.humidity + '%';
  });




  fetch(weatherForesactJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    const daysNames = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    const today = new Date();

    const newList = jsObject.list.filter(newList =>
      newList.dt_txt.includes('18:00:00'));
    
      for (let i = 0; i < 3; i++) {
        let dayBlock = document.createElement('li');
        let dayName = document.createElement('span');
        let dayTemp = document.createElement('span');
        dayBlock.appendChild(dayName);
        dayBlock.appendChild(dayTemp);

        let dayIndex = today.getDay() + i + 1;
        if (dayIndex > 6) {
          dayIndex = dayIndex - 7;
        }
        dayName.textContent = daysNames[dayIndex];
        dayTemp.textContent = (newList[i].main.temp).toFixed(0) + '°C';

        document.querySelector('#forecast').appendChild(dayBlock);

      }
  });


  let warningsAPI = 'https://opendata-download-warnings.smhi.se/api/version/2/alerts.json';

  fetch(warningsAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);
    const alerts = jsObject.alert;

    alerts.forEach(element => {
      if (element.info.area.areaDesc === '025' ) {
        document.getElementById('alert-message').textContent = element.info.description;
      }
    });

  })

