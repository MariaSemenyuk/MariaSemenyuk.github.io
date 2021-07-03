const jsonURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

let eventContainer = document.getElementById('upcoming-events-sodaSprings');


fetch(jsonURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const events = jsonObject.towns[0].events;


      events.forEach(element => {
        // console.log(element);
        let block = document.createElement('div');
        block.textContent = element;
        eventContainer.appendChild(block);
      })
  })