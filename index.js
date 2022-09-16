//  getting data from api
const fetchPokemonData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    const pokemonData = await data.json();
    const name = [];
    const url = [];

// getting name and url
    for (let i = 0; i < pokemonData.results.length; i++) {
        name.push(pokemonData.results[i].name);
        url.push(pokemonData.results[i].url);

// getting data from url on the api

        const getUrlData = async () => {
            const response = await fetch(url[i])
            const data = await response.json();
            let ability = [];
            let move = [];
// data in url
            for (let i = 0; i < data.abilities.length; i++) {
                ability.push(data.abilities[i].ability.name);
            }

            for (let i = 0; i < 5; i++) {
                move.push(data.moves[i].move.name);
            }
// put the all information in container
            document.querySelector(".body-div").innerHTML +=
                `
                <div class="card">
                <div class="image"><img  src="${data.sprites.front_default}"></img></div>
                <div class="card-info">
                <h2 class="name"><span>Name : </span> ${pokemonData.results[i].name}</h2>
                <p class="ability"><span class="key">Abilities : </span>${ability}</p>
                <p class="moves"><span class="key">Moves : </span>${move}</p>
                <p class="weight"><span class="key">Weight : </span>${data.weight}</p>
                </div>
                </div>
            `;
        }
        getUrlData();
    }
}
fetchPokemonData();