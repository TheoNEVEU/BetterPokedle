import { hard, lancerConfettis, eazy } from './confetti.js';

var pokemonsListFile = "https://theoneveu.github.io/BetterPokedle/pokemonList.json";
var request = new XMLHttpRequest();
request.open("GET", pokemonsListFile);
request.responseType = "json";
request.send();
let modeJeu = "normal";
var pokemonsList;
var pokemonTarget;
var isSearchBarLocked = false;
var displaySolution = false;

request.onload = function () {
    pokemonsList = request.response;
    initialiserJeu();
};

function initialiserJeu() {
    pokemonTarget = Math.floor(Math.random() * pokemonsList.length);

    document.getElementById("game-button").classList.add("active");
    document.getElementById("menu-game").classList.remove("inactive");
    document.getElementById("menu-settings").classList.add("inactive");
    document.getElementById("menu-team").classList.add("inactive");

    document.getElementById("Normal").onclick = () => {
        modeJeu = "normal";
        console.log("Mode Normal activé");
        eazy();
    };
    
    document.getElementById("Difficile").onclick = () => {
        modeJeu = "difficile";
        console.log("Mode Difficile activé");
        hard();
    };
    
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
            if(document.activeElement != document.getElementById("SearchBar")) shrinkDiv(document.getElementById("SearchResults"));
        }, 100);
    });

    document.getElementById("solution").onclick = () => {
        ajouterLigne(pokemonTarget, pokemonTarget);
        console.log("Show Solution");
        isSearchBarLocked = true;
        displaySolution = true;
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
        displaySolution = false;
    }

    document.getElementById("game-button").onclick = () => {
        document.getElementById("game-button").classList.add("active");
        document.getElementById("settings-button").classList.remove("active");
        document.getElementById("team-button").classList.remove("active");
        
        document.getElementById("menu-game").classList.remove("inactive");
        document.getElementById("menu-settings").classList.add("inactive");
        document.getElementById("menu-team").classList.add("inactive");

        document.getElementById("menu-game").style.display = 'flex';
        setTimeout(() => {document.getElementById("menu-settings").style.display = 'none';}, 500);
        setTimeout(() => {document.getElementById("menu-team").style.display = 'none';}, 500);
    }

    document.getElementById("settings-button").onclick = () => {
        document.getElementById("game-button").classList.remove("active");
        document.getElementById("settings-button").classList.add("active");
        document.getElementById("team-button").classList.remove("active");

        document.getElementById("menu-game").classList.add("inactive");
        document.getElementById("menu-settings").classList.remove("inactive");
        document.getElementById("menu-team").classList.add("inactive");

        document.getElementById("menu-settings").style.display = 'flex';
        setTimeout(() => {document.getElementById("menu-game").style.display = 'none';}, 500);
        setTimeout(() => {document.getElementById("menu-team").style.display = 'none';}, 500);
    }

    document.getElementById("team-button").onclick = () => {
        document.getElementById("game-button").classList.remove("active");
        document.getElementById("settings-button").classList.remove("active");
        document.getElementById("team-button").classList.add("active");

        document.getElementById("menu-game").classList.add("inactive");
        document.getElementById("menu-settings").classList.add("inactive");
        document.getElementById("menu-team").classList.remove("inactive");

        document.getElementById("menu-team").style.display = 'flex';
        setTimeout(() => {document.getElementById("menu-game").style.display = 'none';}, 500);
        setTimeout(() => {document.getElementById("menu-settings").style.display = 'none';}, 500);
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
        pokemon.types[1] || "Aucun",
        modeJeu === "difficile" ? "?" : pokemon.evolution,
        pokemon.couleur,
        modeJeu === "difficile" ? "?" : pokemon.taille,
        modeJeu === "difficile" ? "?" : pokemon.poids,
        pokemon.generation
    ];
    

    const targetinfos = [
        pokemonsList[pokemonTarget].types[0],
        pokemonsList[pokemonTarget].types[1] || "Aucun",
        modeJeu === "difficile" ? "?" : pokemonsList[pokemonTarget].evolution,
        pokemonsList[pokemonTarget].couleur,
        modeJeu === "difficile" ? "?" : pokemonsList[pokemonTarget].taille,
        modeJeu === "difficile" ? "?" : pokemonsList[pokemonTarget].poids,
        pokemonsList[pokemonTarget].generation
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
            // Image du Pokémon
            const imgTry = document.createElement("img");
            imgTry.id = "pokemonSprite";
            imgTry.src = 'https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/' + pokemon.nomAnglais + '.avif';
            imgTry.alt = pokemon.nom;
            back.appendChild(imgTry);
        } else {
            back.textContent = infos[i - 1]; 
        
            if (infos[i - 1] === "?") {
                // Fond bleu pour les cartes masquées en mode difficile
                back.style.backgroundColor = "#0074cc";
            } else {
                // Fond vert ou rouge en mode normal
                back.style.backgroundColor = (infos[i - 1] === targetinfos[i - 1]) ? "green" : "#C60C30";
            }
        
            // Ajout des flèches pour taille/poids
            if ((i == 5 || i == 6) && infos[i - 1] != targetinfos[i - 1] && infos[i - 1] !== "?") {
                const arrow = document.createElement("img");
                arrow.src = "arrow.png";
                arrow.classList.add("arrow");
                arrow.style.rotate = (infos[i - 1] < targetinfos[i - 1]) ? "180deg" : "0deg";
                back.appendChild(arrow);
            }
        }
        

        front.style.backgroundImage = "url('img/carte.png')";
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
    ajouterResultat(document.getElementById("SearchBar").value.toLowerCase());
    if(pokemonTarget == pokemonGuess){
        setTimeout(() => {
            if(!displaySolution) {
                document.getElementById("score").textContent = parseInt(document.getElementById("score").textContent) + 1;
                lancerConfettis();
            }
        }, 2800);
        isSearchBarLocked = true;
        
    }
    else {
        setTimeout(() => {document.getElementById("SearchBar").focus();}, 2800);
    } 

    
}

function ajouterResultat(pokemonNameSearch) {
    const resultList = document.getElementById("SearchResults");
    
    while(resultList.firstChild){
        resultList.removeChild(resultList.firstChild);
    }

    pokemonsList.forEach(element => {
        if (element.nom.toLowerCase().includes(pokemonNameSearch)) {
            const newResult = document.createElement("button");
            newResult.classList.add("result");
            if(!element.checked){
                newResult.onclick = () => {
                    ajouterLigne(pokemonTarget, element.id - 1);
                    console.log("Guessed " + element.nom);
                }
            }
            else{
                newResult.style.color = 'grey';
                newResult.onclick = () => {
                    document.getElementById("SearchBar").focus();
                }
            }

            newResult.textContent = ""+element.id+". "+element.nom;
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
