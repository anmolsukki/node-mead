const express = require("express");
var cors = require('cors')
const geocode = require("../utils/geocode")
const forecast = require("../utils/forecast")

const app = express();

app.get("/product", (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
    res.send({
        product: []
    })
})

app.get("/weather", cors(), (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "You must provide an address!"
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.listen(4000, () => {
    console.log("Serveris up on port 4000")
})