const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    console.log("request");
    response.sendFile(__dirname + "/views/index.html");
})

app.get("/home", (request, response) => {
    console.log(request);
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
    console.log("request");
    response.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (request, response) => {
    console.log("request");
    response.sendFile(__dirname + "/views/works.html");
})



app.listen(3000, () => console.log("My first app started & listening to port 3000!")) // shows up the log (console.log) when server is starts.