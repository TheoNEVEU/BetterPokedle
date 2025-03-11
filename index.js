const pokemonsList = [
    { id: 1, nom: "Bulbizarre", types: ["Plante", "Poison"], generation: 1, evolution: 1, couleur: "Vert", nomAnglais: "bulbasaur", checked: false },
    { id: 2, nom: "Herbizarre", types: ["Plante", "Poison"], generation: 1, evolution: 2, couleur: "Vert", nomAnglais: "ivysaur", checked: false },
    { id: 3, nom: "Florizarre", types: ["Plante", "Poison"], generation: 1, evolution: 3, couleur: "Vert", nomAnglais: "venusaur", checked: false },
    { id: 4, nom: "Salamèche", types: ["Feu", "Aucun"], generation: 1, evolution: 1, couleur: "Rouge", nomAnglais: "charmander", checked: false },
    { id: 5, nom: "Reptincel", types: ["Feu", "Aucun"], generation: 1, evolution: 2, couleur: "Rouge", nomAnglais: "charmeleon", checked: false },
    { id: 6, nom: "Dracaufeu", types: ["Feu", "Vol"], generation: 1, evolution: 3, couleur: "Orange", nomAnglais: "charizard", checked: false },
    { id: 7, nom: "Carapuce", types: ["Eau", "Aucun"], generation: 1, evolution: 1, couleur: "Bleu", nomAnglais: "squirtle", checked: false },
    { id: 8, nom: "Carabaffe", types: ["Eau", "Aucun"], generation: 1, evolution: 2, couleur: "Bleu", nomAnglais: "wartortle", checked: false },
    { id: 9, nom: "Tortank", types: ["Eau", "Aucun"], generation: 1, evolution: 3, couleur: "Bleu", nomAnglais: "blastoise", checked: false },
    { id: 10, nom: "Chenipan", types: ["Insecte", "Aucun"], generation: 1, evolution: 1, couleur: "Vert", nomAnglais: "caterpie", checked: false },
    { id: 11, nom: "Chrysacier", types: ["Insecte", "Aucun"], generation: 1, evolution: 2, couleur: "Vert", nomAnglais: "metapod", checked: false },
    { id: 12, nom: "Papilusion", types: ["Insecte", "Vol"], generation: 1, evolution: 3, couleur: "Violet", nomAnglais: "butterfree", checked: false },
    { id: 13, nom: "Aspicot", types: ["Insecte", "Poison"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "weedle", checked: false },
    { id: 14, nom: "Coconfort", types: ["Insecte", "Poison"], generation: 1, evolution: 2, couleur: "Jaune", nomAnglais: "kakuna", checked: false },
    { id: 15, nom: "Dardargnan", types: ["Insecte", "Poison"], generation: 1, evolution: 3, couleur: "Jaune", nomAnglais: "beedrill", checked: false },
    { id: 16, nom: "Roucool", types: ["Normal", "Vol"], generation: 1, evolution: 1, couleur: "Brun", nomAnglais: "pidgey", checked: false },
    { id: 17, nom: "Roucoups", types: ["Normal", "Vol"], generation: 1, evolution: 2, couleur: "Brun", nomAnglais: "pidgeotto", checked: false },
    { id: 18, nom: "Roucarnage", types: ["Normal", "Vol"], generation: 1, evolution: 3, couleur: "Brun", nomAnglais: "pidgeot", checked: false },
    { id: 19, nom: "Rattata", types: ["Normal", "Aucun"], generation: 1, evolution: 1, couleur: "Violet", nomAnglais: "rattata", checked: false },
    { id: 20, nom: "Rattatac", types: ["Normal", "Aucun"], generation: 1, evolution: 2, couleur: "Jaune", nomAnglais: "raticate", checked: false },
    { id: 21, nom: "Piafabec", types: ["Normal", "Vol"], generation: 1, evolution: 1, couleur: "Brun", nomAnglais: "spearow", checked: false },
    { id: 22, nom: "Rapasdepic", types: ["Normal", "Vol"], generation: 1, evolution: 3, couleur: "Brun", nomAnglais: "fearow", checked: false },
    { id: 23, nom: "Abo", types: ["Poison", "Aucun"], generation: 1, evolution: 1, couleur: "Violet", nomAnglais: "ekans", checked: false },
    { id: 24, nom: "Arbok", types: ["Poison", "Aucun"], generation: 1, evolution: 3, couleur: "Violet", nomAnglais: "arbok", checked: false },
    { id: 25, nom: "Pikachu", types: ["Électrik", "Aucun"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "pikachu", checked: false },
    { id: 26, nom: "Raichu", types: ["Électrik", "Aucun"], generation: 1, evolution: 3, couleur: "Jaune", nomAnglais: "raichu", checked: false },
    { id: 27, nom: "Sabelette", types: ["Sol", "Aucun"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "sandshrew", checked: false },
    { id: 28, nom: "Sablaireau", types: ["Sol", "Aucun"], generation: 1, evolution: 3, couleur: "Jaune", nomAnglais: "sandslash", checked: false },
    { id: 29, nom: "Nidoran♀", types: ["Poison", "Aucun"], generation: 1, evolution: 1, couleur: "Violet", nomAnglais: "nidoran-f", checked: false },
    { id: 30, nom: "Nidorina", types: ["Poison", "Aucun"], generation: 1, evolution: 2, couleur: "Violet", nomAnglais: "nidorina", checked: false },
    { id: 31, nom: "Nidoqueen", types: ["Poison", "Sol"], generation: 1, evolution: 3, couleur: "Bleu", nomAnglais: "nidoqueen", checked: false },
    { id: 32, nom: "Nidoran♂", types: ["Poison", "Aucun"], generation: 1, evolution: 1, couleur: "Violet", nomAnglais: "nidoran-m", checked: false },
    { id: 33, nom: "Nidorino", types: ["Poison", "Aucun"], generation: 1, evolution: 2, couleur: "Violet", nomAnglais: "nidorino", checked: false },
    { id: 34, nom: "Nidoking", types: ["Poison", "Sol"], generation: 1, evolution: 3, couleur: "Violet", nomAnglais: "nidoking", checked: false },
    { id: 35, nom: "Mélofée", types: ["Fée", "Aucun"], generation: 1, evolution: 1, couleur: "Rose", nomAnglais: "clefairy", checked: false },
    { id: 36, nom: "Mélodelfe", types: ["Fée", "Aucun"], generation: 1, evolution: 3, couleur: "Rose", nomAnglais: "clefable", checked: false },
    { id: 37, nom: "Goupix", types: ["Feu", "Aucun"], generation: 1, evolution: 1, couleur: "Orange", nomAnglais: "vulpix", checked: false },
    { id: 38, nom: "Feunard", types: ["Feu", "Aucun"], generation: 1, evolution: 3, couleur: "Jaune", nomAnglais: "ninetales", checked: false },
    { id: 39, nom: "Rondoudou", types: ["Normal", "Fée"], generation: 1, evolution: 1, couleur: "Rose", nomAnglais: "jigglypuff", checked: false },
    { id: 40, nom: "Grodoudou", types: ["Normal", "Fée"], generation: 1, evolution: 3, couleur: "Rose", nomAnglais: "wigglytuff", checked: false },
    { id: 41, nom: "Nosferapti", types: ["Poison", "Vol"], generation: 1, evolution: 1, couleur: "Violet", nomAnglais: "zubat", checked: false },
    { id: 42, nom: "Nosferalto", types: ["Poison", "Vol"], generation: 1, evolution: 3, couleur: "Violet", nomAnglais: "golbat", checked: false },
    { id: 43, nom: "Mystherbe", types: ["Plante", "Poison"], generation: 1, evolution: 1, couleur: "Bleu", nomAnglais: "oddish", checked: false },
    { id: 44, nom: "Ortide", types: ["Plante", "Poison"], generation: 1, evolution: 2, couleur: "Bleu", nomAnglais: "gloom", checked: false },
    { id: 45, nom: "Rafflesia", types: ["Plante", "Poison"], generation: 1, evolution: 3, couleur: "Rouge", nomAnglais: "vileplume", checked: false },
    { id: 46, nom: "Paras", types: ["Insecte", "Plante"], generation: 1, evolution: 1, couleur: "Rouge", nomAnglais: "paras", checked: false },
    { id: 47, nom: "Parasect", types: ["Insecte", "Plante"], generation: 1, evolution: 3, couleur: "Rouge", nomAnglais: "parasect", checked: false },
    { id: 48, nom: "Mimitoss", types: ["Insecte", "Poison"], generation: 1, evolution: 1, couleur: "Violet", nomAnglais: "venonat", checked: false },
    { id: 49, nom: "Aéromite", types: ["Insecte", "Poison"], generation: 1, evolution: 3, couleur: "Violet", nomAnglais: "venomoth", checked: false },
    { id: 50, nom: "Taupiqueur", types: ["Sol", "Aucun"], generation: 1, evolution: 1, couleur: "Brun", nomAnglais: "diglett", checked: false },
    { id: 51, nom: "Triopikeur", types: ["Sol", "Aucun"], generation: 1, evolution: 3, couleur: "Brun", nomAnglais: "dugtrio", checked: false },
    { id: 52, nom: "Miaouss", types: ["Normal", "Aucun"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "meowth", checked: false },
    { id: 53, nom: "Persian", types: ["Normal", "Aucun"], generation: 1, evolution: 3, couleur: "Jaune", nomAnglais: "persian", checked: false },
    { id: 54, nom: "Psykokwak", types: ["Eau", "Aucun"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "psyduck", checked: false },
    { id: 55, nom: "Akwakwak", types: ["Eau", "Aucun"], generation: 1, evolution: 3, couleur: "Bleu", nomAnglais: "golduck", checked: false },
    { id: 56, nom: "Férosinge", types: ["Combat", "Aucun"], generation: 1, evolution: 1, couleur: "Brun", nomAnglais: "mankey", checked: false },
    { id: 57, nom: "Colossinge", types: ["Combat", "Aucun"], generation: 1, evolution: 3, couleur: "Brun", nomAnglais: "primeape", checked: false },
    { id: 58, nom: "Caninos", types: ["Feu", "Aucun"], generation: 1, evolution: 1, couleur: "Orange", nomAnglais: "growlithe", checked: false },
    { id: 59, nom: "Arcanin", types: ["Feu", "Aucun"], generation: 1, evolution: 3, couleur: "Orange", nomAnglais: "arcanine", checked: false },
    { id: 60, nom: "Ptitard", types: ["Eau", "Aucun"], generation: 1, evolution: 1, couleur: "Bleu", nomAnglais: "poliwag", checked: false },
    { id: 61, nom: "Têtarte", types: ["Eau", "Aucun"], generation: 1, evolution: 2, couleur: "Bleu", nomAnglais: "poliwhirl", checked: false },
    { id: 62, nom: "Tartard", types: ["Eau", "Combat"], generation: 1, evolution: 3, couleur: "Bleu", nomAnglais: "poliwrath", checked: false },
    { id: 63, nom: "Abra", types: ["Psy", "Aucun"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "abra", checked: false },
    { id: 64, nom: "Kadabra", types: ["Psy", "Aucun"], generation: 1, evolution: 2, couleur: "Jaune", nomAnglais: "kadabra", checked: false },
    { id: 65, nom: "Alakazam", types: ["Psy", "Aucun"], generation: 1, evolution: 3, couleur: "Jaune", nomAnglais: "alakazam", checked: false },
    { id: 66, nom: "Machoc", types: ["Combat", "Aucun"], generation: 1, evolution: 1, couleur: "Gris", nomAnglais: "machop", checked: false },
    { id: 67, nom: "Machopeur", types: ["Combat", "Aucun"], generation: 1, evolution: 2, couleur: "Gris", nomAnglais: "machoke", checked: false },
    { id: 68, nom: "Mackogneur", types: ["Combat", "Aucun"], generation: 1, evolution: 3, couleur: "Gris", nomAnglais: "machamp", checked: false },
    { id: 69, nom: "Chétiflor", types: ["Plante", "Poison"], generation: 1, evolution: 1, couleur: "Vert", nomAnglais: "bellsprout", checked: false },
    { id: 70, nom: "Boustiflor", types: ["Plante", "Poison"], generation: 1, evolution: 2, couleur: "Vert", nomAnglais: "weepinbell", checked: false },
    { id: 71, nom: "Empiflor", types: ["Plante", "Poison"], generation: 1, evolution: 3, couleur: "Vert", nomAnglais: "victreebel", checked: false },
    { id: 72, nom: "Tentacool", types: ["Eau", "Poison"], generation: 1, evolution: 1, couleur: "Bleu", nomAnglais: "tentacool", checked: false },
    { id: 73, nom: "Tentacruel", types: ["Eau", "Poison"], generation: 1, evolution: 2, couleur: "Bleu", nomAnglais: "tentacruel", checked: false },
    { id: 74, nom: "Racaillou", types: ["Roche", "Sol"], generation: 1, evolution: 1, couleur: "Brun", nomAnglais: "geodude", checked: false },
    { id: 75, nom: "Gravalanch", types: ["Roche", "Sol"], generation: 1, evolution: 2, couleur: "Brun", nomAnglais: "graveler", checked: false },
    { id: 76, nom: "Grolem", types: ["Roche", "Sol"], generation: 1, evolution: 3, couleur: "Brun", nomAnglais: "golem", checked: false },
    { id: 77, nom: "Ponyta", types: ["Feu", "Aucun"], generation: 1, evolution: 1, couleur: "Jaune", nomAnglais: "ponyta", checked: false }
];

var pokemonTarget = Math.floor(Math.random() * (pokemonsList.length)) + 1;;


function ajouterLigne(pokemonTarget, pokemonGuess) {
    const trylist = document.getElementById("trylist");

    document.getElementById("SearchBar").value = "";
    const resultList = document.getElementById("SearchResults");
    while(resultList.firstChild){
        resultList.removeChild(resultList.firstChild);
    };

    const newRow = document.createElement("div");
    newRow.classList.add("row");

    const pokemon = pokemonsList[pokemonGuess];

    const infos = [
        pokemon.types[0], 
        pokemon.types[1] || "", 
        pokemon.generation, 
        pokemon.evolution, 
        pokemon.couleur, 
        "", "" 
    ];

    const targetinfos = [
        pokemonsList[pokemonTarget].types[0], 
        pokemonsList[pokemonTarget].types[1] || "", 
        pokemonsList[pokemonTarget].generation, 
        pokemonsList[pokemonTarget].evolution, 
        pokemonsList[pokemonTarget].couleur, 
        "", "" 
    ];

    for (let i = 0; i < 8; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        const squareInner = document.createElement("div");
        squareInner.classList.add("square-inner");

        const front = document.createElement("div");
        front.classList.add("square-front");
        const back = document.createElement("div");
        back.classList.add("square-back");

        if (i == 0) {
            const imgTry = document.createElement("img");
            imgTry.id = "pokemonSprite";
            imgTry.src = 'https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/' + pokemon.nomAnglais + '.avif';
            imgTry.alt = pokemon.nom;
            back.appendChild(imgTry);
        } else {
            back.textContent = infos[i - 1]; 
            if (infos[i - 1] == targetinfos[i - 1]) {
                back.style.backgroundColor = "green";
            } else {
                back.style.backgroundColor = '#C60C30';
            }
        }

        front.style.backgroundImage = "url('carte.png')";
        front.style.backgroundSize = "cover";

        squareInner.appendChild(front);
        squareInner.appendChild(back);
        square.appendChild(squareInner);
        newRow.appendChild(square);

        setTimeout(() => {
            squareInner.style.transform = "rotateY(180deg)";
        }, i * 300); // Ajoute un délai pour chaque case
    }

    trylist.insertBefore(newRow, trylist.firstChild);
    pokemonsList[pokemonGuess].checked = true;
}


function ajouterResultat(pokemonNameSearch){
    const resultList = document.getElementById("SearchResults");
    
    while(resultList.firstChild){
        resultList.removeChild(resultList.firstChild);
    };

    pokemonsList.forEach(element => {
        if(element.nom.toLowerCase().includes(pokemonNameSearch) && element.checked==false){
            const newResult = document.createElement("button");
            newResult.classList.add("result");
            newResult.onclick = () => {
                ajouterLigne(pokemonTarget, element.id-1);
                console.log("Guessed "+ element.nom);
            }

            newResult.textContent = element.nom;
            resultList.appendChild(newResult); 
            console.log(element.nom);           
        }
    });
}

document.getElementById("SearchBar").addEventListener('keyup', function(e) {
    let nameSearch = this.value.toLowerCase();
    ajouterResultat(nameSearch);
});

function shrinkDiv(element) {
    element.classList.remove('expand');

    setTimeout(() => {
    element.classList.add('shrink'); 
    }, 10);

    setTimeout(() => {
        element.style.display = 'none';
    }, 500);
}

function expandDiv(element) {
    element.style.display = 'block'; // Rendre visible avant d'animer
    setTimeout(() => {
        element.classList.remove('shrink');
        element.classList.add('expand');
    }, 50); // Petit délai pour que l'effet soit pris en compte
}

document.getElementById("SearchBar").addEventListener('focusin', () => {
    expandDiv(document.getElementById("SearchResults"));
});

document.getElementById("SearchBar").addEventListener('focusout', () => {
    setTimeout(() => {
        shrinkDiv(document.getElementById("SearchResults"));
    }, 50); // Petit délai pour que l'effet soit pris en compte
});

window.addEventListener("load", (event) => {
    pokemonTarget = Math.floor(Math.random() * (pokemonsList.length - 1 + 1)) + 1;
  });