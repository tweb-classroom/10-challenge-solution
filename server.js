import express from "express";
import logger from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// TODO question 1: Retourner 8 logo choisis aléatoirement
app.get("/", (_, res) => {
  res.render("game", {
    logos: [
      { id: "react" },
      { id: "svelte-icon" },
      { id: "vue" },
      { id: "angular-icon" },
    ],
  });
});

// TODO: question 3: ajouter un endpoint pour valider les réponses du joueur
// puis retourner le nombre de réponses corrects et les solutions

app.listen(port, () => {
  console.log(`Magic happens at http://localhost:${port} 🚀`);
});
