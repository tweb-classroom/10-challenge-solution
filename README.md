# 10 - Challenge

## Partie 1 : Logo Quiz (16pt)

Ceci est un exercice pratique dans lequel vous allez créer un jeu de quiz avec JavaScript, HTML CSS et Node.js. Le joueur devra deviner le nom de la technologie web qui se cache derrière chaque logo. Pour corser la partie, les logos ne seront que partiellement visible.

![Example](./example.gif)

### Démarrage

Commencez par exécuter la commande suivante pour installer les dépendances du projet :
```
npm install
```

Puis, démarrez l'application en utilisant la commande ci-dessous :
```
npm run start
```

L'application est maintenant en cours d'exécution sur http://localhost:3000.

Vous pouvez également démarrer l'application avec `npm run watch`. Cette commande permet de relancer le serveur dès qu'un fichier est modifié.

Les tests peuvent être lancés avec la commande :
```
npm run test
```

Référez-vous au fichier [FAQ.md](./FAQ.md) pour quelques informations complémentaires sur le projet.

### Cahier des charges

Pour réussir ce challenge, on vous demande d'apporter les modifications nécessaires au projet de base qui vous est fournis, afin de remplir le cahier des charges suivant :

1. La page d'accueil affiche 8 logos choisis aléatoirement parmi les 124 logos disponible dans le fichier `logo.json` (2pt)
2. Le joueur peut entrer une réponse en dessous de chaque logo à l'aide d'un champ texte. Lorsque le joueur clique sur le bouton "Check results", ses réponses sont envoyées au serveur par une requête POST à l'endpoint `/validate`. (4pt)
3. À l'endpoint `/validate`, le serveur compare les valeurs reçues avec les noms des logos puis retourne une réponse au format JSON contenant le score du joueur (nombre de réponses corrects) ainsi que les solutions du quiz (l'identifiant des logos avec leurs noms). (4pt)
4. Lors de la vérification des valeurs reçues, la casse et les caractères spéciaux sont ignorés. Par exemple, les valeurs `nextjs` et `Next.js` sont considérées comme étant équivalentes. Écrivez un test unitaire pour valider ce comportement. (3pt)
5. Une fois les résultats récupérés côté client, un script modifie le DOM pour
    - afficher le score du joueur (1pt)
    - afficher la solution en dessous de chaque logo (2pt)

Vous êtes libre d'utiliser n'importe quelle technologie Open Source et d'adapter la structure du projet comme bon vous semble.

## Partie 2 : Connaissances générales (8pt)

Répondez aux questions suivantes en modifiant directement le fichier [README.md](./README.md)

**1. Expliquez la différence entre une MPA (Multi-Page Application) et une SPA (Single Page Application). Justifiez le choix d’une architecture pour un blog (2pt)**

Réponse :

**2. Vous êtes responsable de la partie client d'un site web et vous souhaitez utiliser une syntaxe Javascript moderne : ES Modules et Optional Chaining. Décrivez 2 outils que vous devrez mettre en place pour que le site soit compatible avec tous les navigateurs.(2pt)**

Réponse :


**3. Expliquez ce qu'est le Virtual DOM et comment ce concept a changé la manière de créer des applications interactives. Nommez deux frameworks qui se basent sur ce concept. (2pt)**

Réponse :


**4. Décrivez le mode opératoire d’une attaque de type CSRF. Décrivez une mesure pour vous protéger contre ce type d’attaque. (2pt)**

Réponse :
