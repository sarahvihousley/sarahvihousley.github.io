const requestURL = "https://sarahvihousley.github.io/Termproject/JSON/riverguide.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const riverguide = jsonObject['riverguide'];
    

    for (let i = 0; i < riverguide.length; i++ ) {
        if (riverguide[i].name == '#' || riverguide[i].name == 'Joseph Knox' || riverguide[i].name == 'Alexia Perfoma' || riverguide[i].name == 'Robert Cade') {
        let riverguideDiv = document.createElement('div');
        let card = document.createElement('section');
        

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let years = document.createElement('p')
        let email = document.createElement('p')
        let bio = document.createElement('p')
        let image = document.createElement('img');

        h2.textContent = riverguide[i].name;
        h3.textContent = riverguide[i].certification;
        years.textContent = "Years: " + riverguide[i].years;
        email.textContent = "Email: " + riverguide[i].email;
        bio.textContent = "Biography: " + riverguide[i].bio;
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