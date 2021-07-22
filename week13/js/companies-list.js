const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    console.table(jsonObject);
    // for (let i = 0; i < companies.length; i++ ) {
    //   let card = document.createElement('section');
    //   let h2 = document.createElement('h2');
    //   let p1 = document.createElement('p');
    //   let p2 = document.createElement('p');
    //   let div = document.createElement('div');
    //   let image = document.createElement('img');

    //   h2.textContent = companies[i].name + ' ' + companies[i].lastname;
    //   card.appendChild(h2);
    //   p1.textContent = 'Date of Birth: ' + companies[i].birthdate;
    //   card.appendChild(p1);
    //   p2.textContent = 'Place of Birth: ' + companies[i].birthplace;
    //   card.appendChild(p2);

    //   image.setAttribute('src', companies[i].imageurl);
    //   image.setAttribute('alt', companies[i].name + ' ' + companies[i].lastname + ' - ' + (i + 1));
    //   div.appendChild(image);
    //   card.appendChild(div);

    //   document.querySelector('div.cards').appendChild(card);
    // }
  });