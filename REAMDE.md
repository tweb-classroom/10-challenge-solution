# TWEB TE2


## Logo challenge

Dans cet exercice vous allez créer un jeux de quizz avec Javascript, HTML CSS et NodeJS. Le joueur devera deviner le nom de la technologie web qui se cache derrière chaque logo. Pour corser la partie, les logos ne seront que partiellement visible.

### Cahier des charges

1. La page d'accueil est construite du côté serveur et affiche 8 logos choisis aléatoirement (2pt)
2. Le joueur peut entrer une réponse en dessous de chaque logo à l'aide d'un champ texte. Lorsque le jour clique sur le bouton "Check results", ses réponses sont envoyées au serveur par une requête POST à l'endpoint `/validate`. (2pt)
3. À l'endpoint `/validate`, le serveur vérifie les données entrées par le joueur puis retourne une reponse au format JSON contenant le score du joueur (nombre de réponses corrects) ainsi que les solutions du quizz (l'identifiant des logos avec leurs noms). (2pt)

4. Une fois les résultat récupérés côtés client, la page est modifiée côté client pour
   - afficher le score du joueur (1pt)
   - afficher la solution en dessous de chaque logo (2pt) 


### Lancer le projet

```
npm install
```

```
npm run start
npm run watch
```

