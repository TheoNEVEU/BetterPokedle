import { lancerConfettis } from './confetti.js';
import { lancerConfettisAttention } from './confetti.js';

var pokemonsListFile = "https://theoneveu.github.io/BetterPokedle/pokemonList.json";
var request = new XMLHttpRequest();
request.open("GET", pokemonsListFile);
request.responseType = "json";
request.send();

var pokemonsList;
var pokemonTarget;
var isSearchBarLocked = false;
var displaySolution = false;

var nbEssais = 0;
let seconds = 0;

const popup = new Popup({
    id: "simple-buttons",
    title: "T'es sûr de vouloir changer de paramètres ?",
    content: `
        <div class="warning-text">Changer un paramètre réinitialise la partie !</div>
        <div class="button-container">
            <button class="btn-local">Non</button>
            <button class="btn-cloud">Chaud azy</button>
        </div>
    `,
    allowClose: false,
    css: `
        @import url('https://fonts.googleapis.com/css2?family=Micro+5&display=swap');

        .popup.simple-buttons {
            font-family: "Micro 5", sans-serif;
            color: #2D2D2D;
            padding: 1.5em;
        }
        
        .popup.simple-buttons .warning-text {
            font-family: "Micro 5", sans-serif !important;
            font-size: 1.9em !important;
            color: #D62828;
            margin-bottom: 1em;
        }

        .popup.simple-buttons .popup-title {
            font-family: "Micro 5", sans-serif !important;
            text-align: center;
            font-size: 2.6em !important;
            color: #2D2D2D;
            background-color: #FFCB05;
            border-radius: 8px;
            padding: 0.4em 0.6em;
            margin-bottom: 1em;
            box-shadow: inset 0 -2px 0 #C49B00;
        }

        .popup.simple-buttons .poke-icon {
            text-align: center;
            font-size: 2em;
            margin-bottom: 0.3em;
        }

        .popup.simple-buttons .warning-text {
            text-align: center;
            font-size: 1.1em;
            color: #D62828;
            margin-bottom: 1em;
        }

        .popup.simple-buttons .button-container {
            display: flex;
            justify-content: center;
            gap: 2em;
            margin-top: 1.5em;
        }

        .popup.simple-buttons button {
            font-family: "Micro 5", sans-serif;
            padding: 0.6em 1.2em;
            font-size: 1.2em;
            border: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            box-shadow: 0 4px #999;
        }

        .popup.simple-buttons .btn-local {
            background-color: #3B4CCA;
            color: white;
        }

        .popup.simple-buttons .btn-cloud {
            background-color: #FF1A1A;
            color: white;
        }

        .popup.simple-buttons button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px #666;
        }

        .popup.simple-buttons button:active {
            transform: translateY(2px);
            box-shadow: 0 2px #333;
        }
    `,
    loadCallback: () => {
        document.querySelector(".popup.simple-buttons .btn-local").onclick = () => {
            popup.hide();
            console.log("non");
        };

        document.querySelector(".popup.simple-buttons .btn-cloud").addEventListener("mouseenter", () => {
            lancerConfettisAttention();
        });

        document.querySelector(".popup.simple-buttons .btn-cloud").onclick = () => {
            popup.hide();
            const trylist = document.getElementById("trylist");
            while (trylist.firstChild) {
                trylist.removeChild(trylist.firstChild);
            }
            buttonStates = { ...nextButtonStates };
            console.log("Start New Game with new parameters");
            pokemonTarget = Math.floor(Math.random() * pokemonsList.length);
            pokemonsList.forEach(element => element.checked = false);
            isSearchBarLocked = false;
            displaySolution = false;
        };
    },
});


// Liste des IDs de boutons
const buttonIds = [
    "but-type1",
    "but-type2",
    "but-evo",
    "but-couleur",
    "but-taille",
    "but-poids"
];

var buttonStates = {
    "but-type1": true,
    "but-type2": true,
    "but-evo": true,
    "but-couleur": true,
    "but-taille": true,
    "but-poids": true
};

var nextButtonStates = {
    "but-type1": true,
    "but-type2": true,
    "but-evo": true,
    "but-couleur": true,
    "but-taille": true,
    "but-poids": true
};

request.onload = function () {
    pokemonsList = request.response;
    initialiserJeu();
};

function initialiserJeu() {

    pokemonTarget = Math.floor(Math.random() * pokemonsList.length);
    console.log("Pokemon cible : " + pokemonTarget);

    document.getElementById("game-button").classList.add("active");
    document.getElementById("menu-game").classList.remove("inactive");
    document.getElementById("menu-settings").classList.add("inactive");
    document.getElementById("menu-team").classList.add("inactive");

    document.getElementById("SearchBar").addEventListener('keyup', function (e) {
        let nameSearch = this.value.toLowerCase();
        ajouterResultat(nameSearch);
    });

    document.getElementById("SearchBar").addEventListener('focusin', () => {
        if (isSearchBarLocked) document.getElementById("SearchBar").blur();
        else expandDiv(document.getElementById("SearchResults"));
    });

    document.getElementById("SearchBar").addEventListener('focusout', () => {
        setTimeout(() => {
            if (document.activeElement != document.getElementById("SearchBar")) shrinkDiv(document.getElementById("SearchResults"));
        }, 100);
    });

    document.getElementById("solution").onclick = () => {
        isSearchBarLocked = true;
        displaySolution = true;
        ajouterLigne(pokemonTarget, pokemonTarget);
        console.log("Show Solution");
    }

    document.getElementById("restart").onclick = () => {
        const trylist = document.getElementById("trylist");
        seconds = 0;
        nbEssais = 0;
        while (trylist.firstChild) {
            trylist.removeChild(trylist.firstChild);
        }
        console.log("Start New Game");
        pokemonTarget = Math.floor(Math.random() * pokemonsList.length);
        pokemonsList.forEach(element => element.checked = false);
        isSearchBarLocked = false;
        displaySolution = false;
        console.log("Pokemon cible : " + pokemonTarget);
    }

    document.getElementById("apply-diff").onclick = () => {
        popup.show();
    }

    buttonIds.forEach(id => {
        document.getElementById(id).classList.add("active");
        document.getElementById(id).addEventListener("click", () => {
            nextButtonStates[id] = !nextButtonStates[id]; // Toggle le booléen
            document.getElementById(id).classList.toggle("active"); // Toggle le style
            console.log(`${id} -> ${nextButtonStates[id]}`);
        });
    });

    // Liste des groupes de menus
    const menuGroups = ["game", "settings", "team"];

    menuGroups.forEach(active => {
        const button = document.getElementById(`${active}-button`);
        button.addEventListener("click", () => {
            // Met à jour les classes actives
            menuGroups.forEach(name => {
                document.getElementById(`${name}-button`).classList.toggle("active", name === active);
            });

            // Met à jour les menus visibles
            menuGroups.forEach(name => {
                const menu = document.getElementById(`menu-${name}`);
                const isActive = name === active;

                menu.classList.toggle("inactive", !isActive);
                if (isActive) {
                    menu.style.display = "flex";
                }
                else {
                    setTimeout(() => {
                        menu.style.display = "none";
                    }, 750);
                }
            });
        });
    });

}

function ajouterLigne(pokemonTarget, pokemonGuess) {
    nbEssais++;
    const trylist = document.getElementById("trylist");

    document.getElementById("SearchBar").value = "";
    const resultList = document.getElementById("SearchResults");
    while (resultList.firstChild) {
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
        pokemon.generation,
    ];

    const targetinfos = [
        pokemonsList[pokemonTarget].types[0],
        pokemonsList[pokemonTarget].types[1] || "Aucun",
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
            if (((i >= 1 && i <= 6) && buttonStates[buttonIds[i - 1]]) || i == 7 || displaySolution == true) {
                back.textContent = infos[i - 1];
                back.style.backgroundColor = (infos[i - 1] == targetinfos[i - 1]) ? "green" : '#C60C30';
                if ((i == 5 || i == 6) && infos[i - 1] != targetinfos[i - 1]) {
                    const arrow = document.createElement("img");
                    arrow.src = "img/arrow.png";
                    arrow.classList.add("arrow");
                    arrow.style.rotate = (infos[i - 1] < targetinfos[i - 1]) ? "180deg" : "0deg";
                    back.appendChild(arrow);
                }
            }
            else {
                back.textContent = "???";
                back.style.backgroundColor = 'black';
                back.style.color = 'white';
            }
        }

        front.style.backgroundImage = "url('img/carte.png')";
        front.style.backgroundSize = "cover";

        squareInner.appendChild(front);
        squareInner.appendChild(back);
        square.appendChild(squareInner);
        newRow.appendChild(square);

        setTimeout(() => { squareInner.style.transform = "rotateY(180deg)"; }, 50 + i * 300);
    }

    trylist.insertBefore(newRow, trylist.firstChild);
    pokemonsList[pokemonGuess].checked = true;
    ajouterResultat(document.getElementById("SearchBar").value.toLowerCase());
    if (pokemonTarget == pokemonGuess) {
        setTimeout(() => {
            if (!displaySolution) {
                document.getElementById("score").textContent = parseInt(document.getElementById("score").textContent) + 1;
                lancerConfettis();
                lancerPopUp();
            }
        }, 2800);
        isSearchBarLocked = true;

    }
    else {
        setTimeout(() => { document.getElementById("SearchBar").focus(); }, 2800);
    }


}

function ajouterResultat(pokemonNameSearch) {
    const resultList = document.getElementById("SearchResults");

    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
    }

    pokemonsList.forEach(element => {
        if (element.nom.toLowerCase().includes(pokemonNameSearch)) {
            const newResult = document.createElement("button");
            newResult.classList.add("result");
            if (!element.checked) {
                newResult.onclick = () => {
                    ajouterLigne(pokemonTarget, element.id - 1);
                    console.log("Guessed " + element.nom);
                }
            }
            else {
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





const startTimer = () => {
    setInterval(() => {
        seconds++;
        console.log(`Temps : ${seconds}s`);
        console.log(`Essais : ${nbEssais}`);
    }, 1000);
};

startTimer();


function lancerPopUp() {
    const Winpopup = new Popup({
        id: "Win-popup",
        title: "🎉 GAGNE 🎉",
        content: `
            <div class="win-message">
                GG Gros, tu as trouvé le Pokémon en <span class="highlight">${seconds}</span> secondes
                et en <span class="highlight">${nbEssais}</span> essais !
            </div>
            <div class="win-icon">✨🟡✨</div>
        `,
        css: `
            @import url('https://fonts.googleapis.com/css2?family=Micro+5&display=swap');
    
            .popup.Win-popup {
                font-family: "Micro 5", sans-serif;
                text-align: center;
                color: #2D2D2D;
            }

            .popup.Win-popup .win-message {
                font-family: "Micro 5", sans-serif !important;
                font-size: 1.5em !important;
            }

    
            .popup.Win-popup .popup-title {
                font-family: "Micro 5", sans-serif !important;
                font-size: 2em;
                background-color: #FFCB05;
                color: #2D2D2D;
                padding: 0.4em 0.6em;
                border-radius: 10px;
                box-shadow: inset 0 -3px 0 #C49B00;
                margin-bottom: 1em;
            }
    
            .popup.Win-popup .win-message {
                font-size: 1.2em;
                margin: 1em 0;
            }
    
            .popup.Win-popup .highlight {
                color: #E63946;
                font-weight: bold;
            }
    
            .popup.Win-popup .win-icon {
                font-size: 2em;
                margin-top: 0.8em;
                animation: sparkle 1s infinite ease-in-out;
            }
    
            @keyframes popupAppear {
                from {
                    transform: scale(0.8);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
    
            @keyframes sparkle {
                0%, 100% {
                    transform: scale(1);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.2);
                    opacity: 0.7;
                }
            }
        `,
    });

    Winpopup.show();
}


