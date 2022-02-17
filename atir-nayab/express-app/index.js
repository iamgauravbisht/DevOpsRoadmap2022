const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Helllo</h2>");
});

const port = process.env.PORT || 3300;

app.listen(port, () => console.log(`listening on port ${port}`));
