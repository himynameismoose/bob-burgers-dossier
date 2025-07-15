let name = "Linda Belcher"

fetch (`https://bobsburgers-api.herokuapp.com/characters?name=${name}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
    })
    .catch(err => {
        console.log(`error ${err}`);
    })