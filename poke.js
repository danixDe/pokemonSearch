//Declaring all the elements as constants from the ids.
const search = document.getElementById("search-input");
const button = document.getElementById("search-button");
const pokemon_name = document.getElementById("pokemon-name");
const pokemon_id = document.getElementById("pokemon-id");
const sprite_container = document.getElementById("sprite-container");
const types = document.getElementById("types");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const special_attack = document.getElementById("special-attack");
const special_defense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const search_form = document.getElementById("total1");
//async function to get the pokemon data
button.addEventListener("clicked",()=>{
    search.textContent="";
});
async function getpokemon(){
    try {
        const pokemonNameOrId = search.value.toLowerCase();
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await response.json();//gives out the response sheet in json format.
        //api shi
        //all ids updation
        pokemon_name.textContent = `${data.name.toUpperCase()}`;
        pokemon_id.textContent = `#${data.id}`;
        console.log(`${data.id}`);
        weight.textContent = `weight:${data.weight}`;
        height.textContent = `height:${data.height}`;
        sprite_container.innerHTML =
        `<img id= "sprites" src="${data.sprites.front_default}" alt="${data.name.toLowerCase()} image">`;
        //profile ids
        types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
        // types 
        //table starts
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent =data.stats[2].base_stat;
        special_attack.textContent = data.stats[3].base_stat;
        special_defense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
    }
    catch(error)
    {
        resetDisplay();//resets the display.
        alert(`pokemon not found`);
        console.log(`no pokemoon: ${error}`);
    }
}
const resetDisplay=()=>{
    const sprite = document.getElementById("sprites");
    if(sprite) {sprite.remove()};
    //sprite gets removed
    pokemon_id.textContent = '';
    pokemon_name.textContent='';
    weight.textContent='';
    height.textContent='';
    hp.textContent='';
    attack.textContent='';
    defense.textContent='';
    special_attack.textContent='';
    special_defense.textContent='';
    speed.textContent='';
};
search_form.addEventListener("submit",e=>{
    e.preventDefault();
    console.log('clocked');
    
    getpokemon();
});

