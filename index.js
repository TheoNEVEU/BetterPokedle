var pokemonsListFile = "https://theoneveu.github.io/CirmonTCG/pokemonList.json";
var request = new XMLHttpRequest();
request.open("GET", pokemonsListFile);
request.responseType = "json";
request.send();

request.onload = function () {
    var pokemonsList = request.response;
    console.log(pokemonsList);
};

var pokemonTarget = Math.floor(Math.random() * (pokemonsList.length)) + 1;;
var isSearchBarLocked = false;

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
        pokemon.evolution, 
        pokemon.couleur, 
        pokemon.taille, 
        pokemon.poids, 
        pokemon.generation, 
    ];

    const targetinfos = [
        pokemonsList[pokemonTarget].types[0], 
        pokemonsList[pokemonTarget].types[1] || "", 
        pokemonsList[pokemonTarget].evolution, 
        pokemonsList[pokemonTarget].couleur, 
        pokemonsList[pokemonTarget].taille, 
        pokemonsList[pokemonTarget].poids, 
        pokemonsList[pokemonTarget].generation, 
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
        } 
        else {
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
        }, 50 + i * 300); // Ajoute un délai pour chaque case
    }

    trylist.insertBefore(newRow, trylist.firstChild);
    pokemonsList[pokemonGuess].checked = true;
    document.getElementById("SearchBar").focus();
    //expandDiv(document.getElementById("SearchResults"));
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
    if(isSearchBarLocked) document.getElementById("SearchBar").blur();
    else expandDiv(document.getElementById("SearchResults"));
});

document.getElementById("SearchBar").addEventListener('focusout', () => {
    setTimeout(() => {
        shrinkDiv(document.getElementById("SearchResults"));
    }, 50); // Petit délai pour que l'effet soit pris en compte
});

document.getElementById("solution").onclick = () => {
    ajouterLigne(pokemonTarget, pokemonTarget);
    console.log("Show Solution");
    document.getElementById("SearchBar").
    isSearchBarLocked = true;
}

document.getElementById("restart").onclick = () => {
    trylist = document.getElementById("trylist");
    while(trylist.firstChild){
        trylist.removeChild(trylist.firstChild);
    };
    console.log("Start New Game");
    pokemonTarget = Math.floor(Math.random() * (pokemonsList.length - 1 + 1)) + 1;
    pokemonsList.forEach(element.checked=false);
    isSearchBarLocked = false;
}

window.addEventListener("load", (event) => {
    pokemonTarget = Math.floor(Math.random() * (pokemonsList.length - 1 + 1)) + 1;
  });