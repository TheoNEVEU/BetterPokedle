# === Better Pokédle ===

Par : Théo Neveu, Victor Kuchejda--Petit et Anas Gaoua <br/>

## Description du projet

Better Pokédle est un petit jeu codé en Java Script

Le but est de retrouver le nom du Pokémon ( de la première génération seulement, pour l'instant ) avec quelques indices comme:

- <img src="/img/Logo_type1.png" width="25px" height="25px"> Le 1er type 
- <img src="/img/Logo_type2.png" width="25px" height="25px"> Le 2ème type
- <img src="/img/Logo_evo.png" width="25px" height="25px"> Son stade d'évolution 
- <img src="/img/Logo_color.png" width="25px" height="25px"> Sa couleur
- <img src="/img/Logo_taille.png" width="25px" height="25px"> Sa taille
- <img src="/img/Logo_poids.png" width="25px" height="25px"> Son poids

Tout cela basé sur un jeu déjà existant du nom de [Pokédle](https://pokedle.net), d'où le nom "Better Pokédle"

Mais attention, notre version n’est pas une simple copie. 
Nous avons ajouté plusieurs fonctionnalités pour enrichir l'expérience de jeu :

- Un sustème de relance infinie
- Un système de points
- Un système de difficulté : certaines infos du Pokémon peuvent être masquées pour un challenge plus corsé ! <br/>


## Fonctionnalités principales

- Interface interactive en JavaScript
- Base de données complète de Pokémon (type, couleur, taille, etc.)
- Système d’indices pour aider à deviner
- Mode difficile avec indices masqués
- Calcul des points en fonction de la performance
- Partie relançable sans recharger la page <br/>


## Les instructions d’installation et d’exécution
Voici la démarche laplus simple pour lancer notre projet :

- Cloner le dépôt `https://github.com/TheoNEVEU/BetterPokedle.git`
- Ouvrir le fichier `index.js` dans VisualStudio Code
- Installer `npm` et `npx` :
    - ```
      npm install
      npx install
      ```
- Lancer le serveur en local avec la commande ```npx serve .``` ( attention à mettre le point )

Si tout à bien fonctionné, vous devriez avoir une fenêtre comme celle-ci :
 ```
   ┌───────────────────────────────────────────┐
   │                                           │
   │   Serving!                                │
   │                                           │
   │   - Local:    http://localhost:3000       │
   │   - Network:  http://192.168.0.XXX:3000   │
   │                                           │
   │   Copied local address to clipboard!      │
   │                                           │
   └───────────────────────────────────────────┘
 ```
Vous n'avez plus qu'a Ctrl+click sur un des liens et vous amuser !
