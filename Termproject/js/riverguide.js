const requestURL = "https://sarahvihousley.github.io/Termproject/json/riverguide.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const riverguide = jsonObject['riverguide'];
    

    for (let i = 0; i < riverguide.length; i++ ) {
        if (riverguide[i].name == 'Joseph Knox' || towns[i].name == 'Alexia Perfoma' || towns[i].name == 'Robert Cade') {
        let riverguideDiv = document.createElement('div');
        let card = document.createElement('section');
        

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let years = document.createElement('p')
        let email = document.createElement('p')
        let bio = document.createElement('p')
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].certification;
        years.textContent = "Years: " + towns[i].years;
        email.textContent = "Email: " + towns[i].email;
        bio.textContent = "Biography: " + towns[i].bio;
        image.setAttribute('src', 'images/' + riverguide[i].photo);
        image.setAttribute('alt', riverguide[i].name);

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(years);
        card.appendChild(email);
        card.appendChild(bio);
        
        riverguideDiv.appendChild(card);
        riverguideDiv.appendChild(image);
      

        document.querySelector('div.riverguide').appendChild(riverguideDiv);
        
    }
        else {
            continue;
        }


    }
  });