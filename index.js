var pokemonsListFile = "https://theoneveu.github.io/CirmonTCG/pokemonList.json";
var request = new XMLHttpRequest();
request.open("GET", pokemonsListFile);
request.responseType = "json";
request.send();

var pokemonsList;
var pokemonTarget;
var isSearchBarLocked = false;

request.onload = function () {
    pokemonsList = request.response;
    initialiserJeu();
};

function initialiserJeu() {
    pokemonTarget = Math.floor(Math.random() * pokemonsList.length);
    
    document.getElementById("SearchBar").addEventListener('keyup', function(e) {
        let nameSearch = this.value.toLowerCase();
        ajouterResultat(nameSearch);
    });

    document.getElementById("SearchBar").addEventListener('focusin', () => {
        if (isSearchBarLocked) document.getElementById("SearchBar").blur();
        else expandDiv(document.getElementById("SearchResults"));
    });

    document.getElementById("SearchBar").addEventListener('focusout', () => {
        setTimeout(() => {
            shrinkDiv(document.getElementById("SearchResults"));
        }, 50);
    });

    document.getElementById("solution").onclick = () => {
        ajouterLigne(pokemonTarget, pokemonTarget);
        console.log("Show Solution");
        isSearchBarLocked = true;
    }

    document.getElementById("restart").onclick = () => {
        const trylist = document.getElementById("trylist");
        while (trylist.firstChild) {
            trylist.removeChild(trylist.firstChild);
        }
        console.log("Start New Game");
        pokemonTarget = Math.floor(Math.random() * pokemonsList.length);
        pokemonsList.forEach(element => element.checked = false);
        isSearchBarLocked = false;
    }
}

function ajouterLigne(pokemonTarget, pokemonGuess) {
    const trylist = document.getElementById("trylist");

    document.getElementById("SearchBar").value = "";
    const resultList = document.getElementById("SearchResults");
    while(resultList.firstChild){
        resultList.removeChild(resultList.firstChild);
    }

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
        } else {
            back.textContent = infos[i - 1]; 
            back.style.backgroundColor = (infos[i - 1] == targetinfos[i - 1]) ? "green" : '#C60C30';
        }

        front.style.backgroundImage = "url('carte.png')";
        front.style.backgroundSize = "cover";

        squareInner.appendChild(front);
        squareInner.appendChild(back);
        square.appendChild(squareInner);
        newRow.appendChild(square);

        setTimeout(() => {
            squareInner.style.transform = "rotateY(180deg)";
        }, 50 + i * 300);
    }

    trylist.insertBefore(newRow, trylist.firstChild);
    pokemonsList[pokemonGuess].checked = true;
    document.getElementById("SearchBar").focus();
}

function ajouterResultat(pokemonNameSearch) {
    const resultList = document.getElementById("SearchResults");
    
    while(resultList.firstChild){
        resultList.removeChild(resultList.firstChild);
    }

    pokemonsList.forEach(element => {
        if (element.nom.toLowerCase().includes(pokemonNameSearch) && !element.checked) {
            const newResult = document.createElement("button");
            newResult.classList.add("result");
            newResult.onclick = () => {
                ajouterLigne(pokemonTarget, element.id - 1);
                console.log("Guessed " + element.nom);
            }

            newResult.textContent = toString(element.id)+". "+element.nom;
            resultList.appendChild(newResult); 
        }
    });
}

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
    element.style.display = 'block';
    setTimeout(() => {
        element.classList.remove('shrink');
        element.classList.add('expand');
    }, 50);
}
