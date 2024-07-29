

async function searchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    if (!pokemonName) return;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
        alert("Pokémon not found!");
        return;
    }
    const data = await response.json();

    document.getElementById('pokemonNameDisplay').innerText = capitalizeFirstLetter(data.name);
    document.getElementById('pokemonImage').src = data.sprites.front_default;
    document.getElementById('pokemonDescription').innerText = `Height: ${data.height} decimetres, Weight: ${data.weight} hectograms`;

    const abilities = data.abilities.map(ability => `<li class="list-group-item">${capitalizeFirstLetter(ability.ability.name)}</li>`).join('');
    document.getElementById('pokemonAbilities').innerHTML = abilities;

    const types = data.types.map(type => `<li class="list-group-item">${capitalizeFirstLetter(type.type.name)}</li>`).join('');
    document.getElementById('pokemonTypes').innerHTML = types;

    const stats = data.stats.map(stat => `
        <tr>
            <td>${capitalizeFirstLetter(stat.stat.name)}</td>
            <td>${stat.base_stat}</td>
        </tr>
    `).join('');
    document.getElementById('pokemonStats').innerHTML = stats;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
