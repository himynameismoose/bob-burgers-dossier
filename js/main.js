let name = "Linda Belcher"

document.querySelector('.new-burger-btn').addEventListener('click', getRandomBurger);

function getRandomBurger() {
    const min = 1;
    const max = 416;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    fetch(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${random}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.name);
            document.querySelector('#burger-name').innerText = data.name;
        })
}

fetch (`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // document.querySelector('h1').innerText = data[0].name;
        // document.querySelector('img').src = data[0].image;
        
    })
    .catch(err => {
        console.log(`error ${err}`);
    })