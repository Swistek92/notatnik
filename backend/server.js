const express = require('express');
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const env = require('dotenv').config({ path: 'ENV_FILENAME' });


const app = express();
dotenv.config();
connectDB();

app.get("/",(req,res)=> {
  res.send("api is runing..")
});

app.get("/api/notes", (req,res)=>{
  res.json(notes);
});

app.get("/api/notes/:id",(req,res)=>{
  const note =notes.find((n) => n._id === req.params.id);
  res.send(note);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`this server run at ${PORT}`));
