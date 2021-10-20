const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicPath = path.join(__dirname, "../public")

const hbsPath = path.join(__dirname, "../template")

app.set("view engine", "hbs")
hbs.registerPartials(hbsPath)

app.use(express.static(publicPath))

app.get("/home", (req, res) => {
    res.send("Hello Express")
})

app.get("/about", (req, res) => {
    res.send("<h1>About Page HTML</h1>")
})

app.get("/tempreture", (req, res) => {
    res.render("Weather", {
        title: "Weather App",
        name: "Anmol Kumar Singh"
    })
})

app.use("*", (req, res) => {
    res.send("My 404 Page")
})

app.listen(3000, () => {
    console.log("server is up on port 3000")
})