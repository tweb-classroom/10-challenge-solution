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

Une Multi-page Application construit les pages du côté serveur et un rechargement de la page est nécessaire pour chaque navigation.

Une Single Page Application gère la construction des pages et la navigation côté client.

Pour un Blog, l'architecture la plus appropriée serait une MPA pour les raisons suivantes:
- 🔥 SEO: Les robots auront plus de facilité à indexer le contenu des pages sans attendre que le JS s'exécute (ou bug dans certains cas).
- 🚀 Performance: La quantité de scripts à télécharger et à exécuter sera moindre (améliore également le [SEO](https://developers.google.com/search/blog/2020/11/timing-for-page-experience)).
- 💵 Coût de développement: Les MPA sont généralement beaucoup plus simple à développer. Pas besoin de réimplémenter les fonctionnalités de base des navigateurs (ex. L'envoi de formulaire, la gestion de l'historique du navigateur, etc.), puis pas besoin de créer d'API.

Remarques concernant la correction:
- ❌ Le fait d'avoir beaucoup de pages, des layout différent ou encore une grande quantité de donnée ne sont pas des critères pour le choix d'une de ses architectures.
- ✅ Utiliser l'architecture SPA pour améliorer l'expérience utilisateur est justifiable. On peut par exemple améliorer les performances ressenties lors de la navigation entre les pages. Mais attention au coût de développement plus important (ex. un joli blog mal référencer c'est dommage, donc ajouter du Server Side Rendering serait une sage décision).

Informations complémentaire:
Pour un blog, le meilleur des deux mondes est de générer des pages `.html` statiques pour chaque article. Ainsi, on assure le SEO et diminue le temps de latence pour naviguer de pages en pages. Un outil populaire est https://www.gatsbyjs.com/

**2. Vous êtes responsable de la partie client d'un site web et vous souhaitez utiliser une syntaxe Javascript moderne : ES Modules et Optional Chaining. Décrivez 2 outils que vous devrez mettre en place pour que le site soit compatible avec tous les navigateurs.(2pt)**

- Certains navigateurs ne supportent pas les modules ES6. Il faut donc utiliser un module *bundler* tel que Webapack ou Browserify pour rassembler les modules dans un seul fichier.
- La syntaxe Optional Chaining n'est pas encore comprise par beaucoup de navigateurs. Il faut donc utiliser un transpilateur tel que Babel pour transformer cette syntaxe moderne en Javascript ES5 (supporté partout)

**3. Expliquez ce qu'est le Virtual DOM et comment ce concept a changé la manière de créer des applications interactives. Nommez deux frameworks qui se basent sur ce concept. (2pt)**

Le Virtual DOM est une représentation en mémoire (un simple objet Javascript) du DOM. 

Ce concept est utilisé par des frameworks tels que React ou Vue et permet le rendu déclaratif: Le développeur s'occupe de modifier le *state* de son application et le framework se charge de mettre à jour le DOM de manière efficace.


**4. Décrivez le mode opératoire d’une attaque de type CSRF. Décrivez une mesure pour vous protéger contre ce type d’attaque. (2pt)**

L'attaquant exécute des actions malveillantes (par le biais d'une requête HTTP) en profitant des droits d'un utilisateur (par exemple les informations d'authentification présentent dans les cookies).

La faille apparaît lorsque le serveur ne vérifie pas la provenance d'une requête pour distinguer celles émises par un site connu ou malveillant. 

Quelques solutions:
- Utiliser l'option `SameSite` pour les cookies garanti qu'ils sont envoyés uniquement au sein du même domaine.
- Ajouter des entêtes CORS garanti que les requêtes HTTP sont envoyées uniquement depuis un domaine connu.
- Utiliser des CSRF Tokens garantie que les requêtes proviennent d'une page générée par le serveur courant.

