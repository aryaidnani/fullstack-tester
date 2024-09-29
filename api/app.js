const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/arya", (req, res) => {
  res.send("Hello Arya 1");
});

app.get("/arya2", (req, res) => {
  res.send("Hello Arya 2");
});

app.listen();
