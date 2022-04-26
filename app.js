const express = require ("express");

const app = express()

app.get("/", (req,res,next) => {
    // _ _dirname
res.sendFile(__dirname + "/views/index.html"); // <= estoy enviando un archivo .html
})

app.get("/", (req,res,next) => {
    // _ _dirname
res.sendFile(__dirname + "/views/about.html"); 
})

app.get("/", (req,res,next) => {
    // _ _dirname
res.sendFile(__dirname + "/views/work.html"); 
})


app.listen(3000,() => {
    console.log("Estoy corriendo en el puerto 3000")
})
