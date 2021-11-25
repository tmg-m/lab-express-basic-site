const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
    console.log("request");
    response.sendFile(__dirname + "/views/home.html");
})

app.get("/about", (request, response) => {
    console.log("request");
    response.sendFile(__dirname + "/views/about.html")
})

app.get("/hobby", (request, response) => {
    console.log("request");
    response.sendFile(__dirname + "/views/hobby.html");
})



app.listen(3000, () => console.log("My first app started & listening to port 3000!")) // shows up the log (console.log) when server is starts.