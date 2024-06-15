const express = require("express");
require("dotenv").config()
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter page");
});

app.get("/login", (req, res) => { 
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube",(req,res)=>{
    res.send("<h2>Youtube</h2>")
})


app.listen(port, () => {
  console.log("Server started at: ", port);
});
