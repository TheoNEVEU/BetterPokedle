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
- Partie à l'infinie sans recharger la page <br/>


## Les instructions d’installation et d’exécution
Voici la démarche la plus simple pour lancer notre projet :

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
Vous n'avez plus qu'a Ctrl+click sur un des liens et vous amuser !<br/>

## Comment jouer 
### Le menu
Le menu se trouve sur la gauche, rerésenté pas un pokedex, on y trouve trois bouton et un compteur de point :<br/>
- <img src="/img/loupe.png" width="25px" height="25px"> Le menu **Jeu** :
      Il permet de lancer une nouvelle partie ou d'afficher la solution en cas de difficulté (aucun point n'est donné dans ce cas)<br/>
- <img src="/img/settings.png" width="25px" height="25px"> Le menu **Paramètres** :
      Il permet de gérer les paramètres de la partie concernant la difficulté, on peut y désactiver chaque info du pokémon indépendamment<br/>
      Lorsqu'une information est masquée, elle apparaît grisée dans les parmètres et affiche une carte noir contenant *???*<br/>
- <img src="/img/logo-rokcet.png" width="25px" height="25px"> Le menu **Notre équipe** :
      Il présente de manière *très* sérieuse l'équipe de développement de ce jeu.

### Le Jeu
Le jeu se trouve sur la partie droite de l'écran, il contient une barre de recherche, permettant de rechercher le bon pokemon parmis les 151 disponibles.  
Lorsque la barre de recherche est sélectionnée, une fenêtre s'ouvre pour afficher les pokemons correspondant à la recherche.  
Pour lancer une tentative, il suffit de clicker sur le nom d'un pokemon de la liste de résultats.<br/><br/><br/>

<img src="/img/README_Exemple1.png" width="100%" height="auto">
Voici à quoi ressemble une tentative lors d'une partie, voyons la signification de chaque élément :<br/>

- Une case **rouge** indique que l'information de cette carte **ne correspond pas au pokemon recherché**
- Une case **verte** indique que l'information de cette carte **correspond au pokemon recherché**
- Une case **noire** indique une information **masquée**
- Une case contenant une **flèche** indique que l'information de cette carte est :
    - **inférieure au pokemon recherché** pour une **flèche vers le haut**
    - **supérieur au pokemon recherché** pour une **flèche vers le bas**

Si toutes les cartes sont vertes, vous avez gagné ! Vous incrémentez donc votre compteur de victoires de un.
