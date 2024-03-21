require("dotenv").config({ path: "./Server/config/.env" });

const express = require("express");
const cors = require("cors");
const notes = require("./Server/controller/recordController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/notes", notes.getAll);
app.get("/notes/:id", notes.getOne);
app.post("/notes", notes.create);
app.patch("/notes/:id", notes.update);
app.delete("/notes/:id", notes.delete);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log(`Service started successfully on port ${process.env.PORT}`);
});
