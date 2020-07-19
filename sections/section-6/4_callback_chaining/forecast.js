const request = require("request")

const forecast = (lattitude, langitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=646373df603b925b08622b6cf2191192&query=${lattitude},${langitude}&units=m`
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect weather service!", undefined)
        }
        else if(response.body.error) {
            callback("Unable to find location!", undefined)
        }
        else {
            callback(undefined, response.body.current.temperature)
        }
    })
}

module.exports = forecast;
