const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/arya", (req, res) => res.send("Hello Arya!"));

app.get("/jon", (req, res) => res.send("Hello Jon Snow!"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
