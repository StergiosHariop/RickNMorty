const container = document.querySelector('.row');

//Fetching the API.

fetch('https://rickandmortyapi.com/api/character')
.then((response)=> response.json())
.then((data)=> Cards(data.results));

//Character card creation function.

function Cards(data){

    data.forEach(character => {

    const col = document.createElement('div');
    col.classList.add('col-4');
    container.appendChild(col);

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-bs-toggle',"modal");
    card.setAttribute('data-bs-target',"#exampleModal");
    card.style.width = '18rem';
    col.appendChild(card);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = character.image;
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = character.name;
    card.appendChild(title);

    const species = document.createElement('p');
    species.classList.add('card-text1');
    species.innerHTML = character.species;
    card.appendChild(species);

    const status = document.createElement('p');
    status.classList.add('card-text2');
    status.innerHTML = character.status;
    card.appendChild(status);

    })    
};


//Event Listener for every div onClick, calling and adjusting the modal.

document.addEventListener('click', function(e){
    if(e.target.className == 'card' || e.target.parentNode.className == 'card'){
        if(e.target.className == 'card'){
            document.getElementById('image').src = e.target.childNodes[0].src;
            document.getElementById('name').innerHTML = e.target.childNodes[2].innerHTML;
            document.getElementById('name').style.fontWeight = 'bold';

            document.getElementById('species').innerHTML = e.target.childNodes[3].innerHTML;
            document.getElementById('status').innerHTML = e.target.childNodes[4].innerHTML;
        }
        else{
            document.getElementById('image').src = e.target.parentNode.childNodes[0].src;
            document.getElementById('name').innerHTML = e.target.parentNode.childNodes[2].innerHTML;
            document.getElementById('name').style.fontWeight = 'bold';

            document.getElementById('species').innerHTML = e.target.parentNode.childNodes[3].innerHTML;
            document.getElementById('status').innerHTML = e.target.parentNode.childNodes[4].innerHTML;
        }
    }
})


