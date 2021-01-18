# Questions fréquents

**Qu'est ce que EJS ?**

EJS est un moteur de template très simple qui peut être utilisé avec ExpressJS.

Par exemple, ici on va rendre le template `views/example.ejs` en lui passant une variable `user`

```js
app.get("/", (req, res) => {
  res.render("example", { user: { name: "paulnta" } });
});
```

Puis dans le fichier de template vous pourrez utiliser la syntaxe:
- `<% %>` pour controler le flux (conditions, boucles, etc.)
- `<%= %>` pour inclure le contenu d'une variable dans la page 

Exemple:
```html
<!-- views/example.ejs -->
<% if (user) { %>
<h2>Hello <%= user.name %></h2>
<% } %>
```


**J'ai un erreur lorsque j'essaye d'importer un module**
Lorsque le flag `--experimental-modules` est utilisé, ce qui est le cas dans ce projet, il devient nécessaire de specifier l'extension.

```js
// Don't
import validation from './utils/validation'

// DO
import validation from './utils/validation.js'
```