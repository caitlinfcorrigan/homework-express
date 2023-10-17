// Load express
const express = require("express");

// Require menu "database"
const sampleMenu = require("./data/menu")

// Create express app
const app = express();

// Enable listen method on port 3000
app.listen(3000, function() {
    console.log("Listening on port 3000");
})

// Redirect "root" to home
app.get("/", function(req, res) {
    res.redirect("/home");
})

// Set up the home page
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/home", function(req, res) {
    res.render("home");
})

// Render the data on menu page
app.get("/menu", function(req, res) {
    res.render("menu/index", {
        menu: sampleMenu.getAll()
    })
})