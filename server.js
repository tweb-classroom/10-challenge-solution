import express from "express";
import logger from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (_, res) => {
  res.render("game", {
    logos: [
      { name: "React", id: "react" },
      { name: "Svelte", id: "svelte-icon" },
      { name: "Vue", id: "vue" },
      { name: "Angular", id: "angular-icon" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Magic happens at http://localhost:${port} 🚀`);
});
