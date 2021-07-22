const requestURL = 'https://raw.githubusercontent.com/MariaSemenyuk/mariasemenyuk.github.io/master/week13/js/companies-list.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    // console.table(jsonObject);

    for (let i = 0; i < companies.length; i++ ) {
      let card = document.createElement('div');
      let a = document.createElement('a');
      let image = document.createElement('img');
      let p = document.createElement('p');
      
      card.appendChild(a);
      a.appendChild(image);
      card.appendChild(p);

      a.setAttribute('href', companies[i].businessWebsite);
      image.setAttribute('src', companies[i].logo);
      image.setAttribute('alt', companies[i].businessName + ' logo');
      p.textContent = companies[i].businessAddres;

      document.querySelector('#membersList').appendChild(card);
    }
  });