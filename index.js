import { lancerConfettis } from './confetti.js';
var pokemonsListFile = "https://theoneveu.github.io/BetterPokedle/pokemonList.json";
var request = new XMLHttpRequest();
request.open("GET", pokemonsListFile);
request.responseType = "json";
request.send();
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
    ajouterListenersCheckbox();

    document.getElementById("game-button").classList.add("active");
    document.getElementById("menu-game").classList.remove("inactive");
    document.getElementById("menu-settings").classList.add("inactive");
    document.getElementById("menu-team").classList.add("inactive");

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

    // Ajout des gestionnaires de checkboxes
    initialiserCheckboxes();
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
        pokemon.evolution,
        pokemon.couleur,
        pokemon.taille,
        pokemon.poids,
        pokemon.generation
    ];
    

    const targetinfos = [
        pokemonsList[pokemonTarget].types[0],
        pokemonsList[pokemonTarget].types[1] || "Aucun",
        pokemonsList[pokemonTarget].evolution,
        pokemonsList[pokemonTarget].couleur,
        pokemonsList[pokemonTarget].taille,
        pokemonsList[pokemonTarget].poids,
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
            const imgTry = document.createElement("img");
            imgTry.id = "pokemonSprite";
            imgTry.src = 'https://img.pokemondb.net/sprites/scarlet-violet/icon/avif/' + pokemon.nomAnglais + '.avif';
            imgTry.alt = pokemon.nom;
            back.appendChild(imgTry);
        } else {
            const infoKey = ["type1", "type2", "evolution", "couleur", "taille", "poids", "generation"][i - 1];
if (!isInfoVisible(infoKey)) {
    back.textContent = "?";
    back.style.backgroundColor = "#0095ff"; // Bleu si masqué
} else {
    back.textContent = infos[i - 1]; 
    back.style.backgroundColor = (infos[i - 1] === targetinfos[i - 1]) ? "green" : "#C60C30";

    // Flèche si taille ou poids incorrects
    if ((infoKey === "taille" || infoKey === "poids") && infos[i - 1] != targetinfos[i - 1]) {
        const arrow = document.createElement("img");
        arrow.src = "arrow.png";
        arrow.classList.add("arrow");
        arrow.style.rotate = (infos[i - 1] < targetinfos[i - 1]) ? "180deg" : "0deg";
        back.appendChild(arrow);
    }
}


            if ((i == 5 || i == 6) && infos[i - 1] != targetinfos[i - 1]) {
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

            newResult.textContent = "" + element.id + ". " + element.nom;
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

function initialiserCheckboxes() {
    const checkboxes = document.querySelectorAll('#menu-settings input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => filtrerPokemon());
    });
}

function isInfoVisible(infoType) {
    return document.getElementById(`show-${infoType}`).checked;
}

function ajouterListenersCheckbox() {
    const champs = ["type1", "type2", "evolution", "couleur", "taille", "poids", "generation"];
    champs.forEach(type => {
        document.getElementById(`show-${type}`).addEventListener("change", () => {
            rafraichirDerniereLigne();
        });
    });
}

function rafraichirDerniereLigne() {
    const trylist = document.getElementById("trylist");
    const lastTry = trylist.firstChild;
    if (!lastTry) return;

    const idAttr = lastTry.dataset.pokemonGuess;
    const guess = parseInt(idAttr);
    if (isNaN(guess)) return;

    trylist.removeChild(lastTry);
    ajouterLigne(pokemonTarget, guess);
}


function filtrerPokemon() {
    const resultList = document.getElementById("SearchResults");
    const nomCherche = document.getElementById("SearchBar").value.toLowerCase();

    while (resultList.firstChild) resultList.removeChild(resultList.firstChild);

    const filtres = {
        types: Array.from(document.querySelectorAll('.typeCheck:checked')).map(cb => cb.value),
        couleurs: Array.from(document.querySelectorAll('.colorCheck:checked')).map(cb => cb.value),
        generations: Array.from(document.querySelectorAll('.genCheck:checked')).map(cb => parseInt(cb.value))
    };

    pokemonsList.forEach(pokemon => {
        const matchNom = pokemon.nom.toLowerCase().includes(nomCherche);
        const matchType = filtres.types.length === 0 || filtres.types.some(t => pokemon.types.includes(t));
        const matchCouleur = filtres.couleurs.length === 0 || filtres.couleurs.includes(pokemon.couleur);
        const matchGen = filtres.generations.length === 0 || filtres.generations.includes(pokemon.generation);

        if (matchNom && matchType && matchCouleur && matchGen) {
            const bouton = document.createElement("button");
            bouton.classList.add("result");
            bouton.textContent = `${pokemon.id}. ${pokemon.nom}`;
            if (!pokemon.checked) {
                bouton.onclick = () => {
                    ajouterLigne(pokemonTarget, pokemon.id - 1);
                    console.log("Guessed " + pokemon.nom);
                };
            } else {
                bouton.style.color = 'grey';
                bouton.onclick = () => {
                    document.getElementById("SearchBar").focus();
                };
            }
            resultList.appendChild(bouton);
        }
    });
}
