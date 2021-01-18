import express from "express";
import logger from "morgan";
import logos from "./logos.json";
import { randomArray, compare } from './utils/index.js'

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

// TODO question 1: Retourner 8 logo choisis aléatoirement
app.get("/", (_, res) => {
  res.render("game", { logos: randomArray(logos, 8) });
});

// TODO: question 3: ajouter un endpoint pour valider les réponses du joueur
// puis retourner le nombre de réponses corrects et les solutions
app.post("/validate", (req, res) => {
  const items = Object.entries(req.body).map(([id, answer]) => {
    const logo = logos.find((logo) => logo.id === id);
    return {
      id: logo.id,
      name: logo.name,
      valid: compare(answer, logo.name),
    };
  });

  res.json({
    logos: items,
    score: items.filter((item) => item.valid).length,
  });
});

app.listen(port, () => {
  console.log(`Magic happens at http://localhost:${port} 🚀`);
});
