const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../viewsFile")

app.use('/pdr', express.static(publicDirPath));

app.set('view engine', 'hbs');
app.set("views", viewsPath)

app.get("/hbs", (req, res) => {
    res.render("index", {
        title: "Dynamic",
        name: "Anmol"
    })
})

app.get("", (req, res) => {
    res.send("Hello Express!")
});

app.get("/help", (req, res) => {
    res.send("<h1>Help Page!</h1>")
})

app.get("/about", (req, res) => {
    res.send({
        name: "Anmol Kumar Singh",
        Course: "Node JS"
    })
})

app.listen(3000, () => {
    console.log("Serveris up on port 3000")
})