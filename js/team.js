document.addEventListener('DOMContentLoaded', function () {
    var pokemonList = document.getElementById('pokemon-list');
    var teamList = document.getElementById('team-list');

    pokemonList.addEventListener('dragstart', function (e) {
        if (e.target.classList.contains('pokemon')) {
            e.dataTransfer.setData('text/plain', e.target.dataset.name);
        }
    });

    teamList.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    teamList.addEventListener('drop', function (e) {
        e.preventDefault();
        var pokemonName = e.dataTransfer.getData('text/plain');
        var pokemon = document.querySelector(`.pokemon[data-name="${pokemonName}"]`).cloneNode(true);
        pokemon.removeAttribute('draggable');
        teamList.appendChild(pokemon);
    });
});
