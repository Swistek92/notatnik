const express = require('express');
const notes = require("./data/notes");
const app = express();


app.get("/",(req,res)=> {
  res.send("api is runing..")
});

app.get("/api/notes", (req,res)=>{
  res.json(notes);
});


app.listen(5000,console.log('server started on port 5000'));
