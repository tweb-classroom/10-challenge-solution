import express from "express";
import logger from "morgan";
import logos from "./logos.json";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

function random(arr, count) {
  return arr.sort(() => Math.random() - Math.random()).slice(0, count);
}

function verify(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

app.get("/", (_, res) => {
  res.render("game", { logos: random(logos, 8) });
});

app.post("/validate", (req, res) => {
  const items = Object.entries(req.body).map(([id, answer]) => {
    const logo = logos.find((logo) => logo.id === id);
    return {
      id: logo.id,
      name: logo.name,
      valid: verify(answer, logo.name),
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
