var express = require("express");
var app = express();

app.get("/", (req, res) => {
    console.log("There is GET request for the homepage!");
    res.send("Here is the GET Method!");
})

app.post("/", (req, res) => {
    console.log("A POST request for the homepage is accessed.");
    res.send("Here is the POST Method!");
})

app.get("/profile", (req, res) => {
    console.log("A GET request for /profile");
    res.send("My name is James Carl N. Mananquil");
})

app.get("/list-user", (req, res) => {
    console.log("Got a GET request for /list_user");
    res.send("This is Page Listing");
})

app.get("/ab*cd", (req, res) => {
    console.log("Got a GET request for /ab*cd");
    res.send("Pattern Match Page");
})

var server = app.listen(4000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
