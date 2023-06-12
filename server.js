const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const heroes = {
  itachi: {
    name: "Itachi Uchiha",
    bestMove: "Infinite Tsukuyomi",
    isDead: "Yes",
  },
  naruto: {
    name: "Naruto Uzumaki",
    bestMove: "Sexy Jutsu",
    isDead: "No",
  },
  minato: {
    name: "Minato Namikaze",
    bestMove: "Teleportation Jutsu",
    isDead: "Yes",
  },
};
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(heroes);
});

app.get("/api/:heroName", (req, res) => {
  const herosName = req.params.heroName;
  if (heroes[herosName]) {
    res.json(heroes[herosName]);
  } else {
    res.send("No data available for this character now!");
  }
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server started at port ${PORT}`);
});
