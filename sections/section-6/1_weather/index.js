const request = require("request");

// Weatherstack
const url = "http://api.weatherstack.com/current?access_key=646373df603b925b08622b6cf2191192&query=chandigarh&units=m";

request({url: url}, (error, response) => {
    if(error) {
        console.log("Unable to connect weather service!")
    }
    else if(response.body.error) {
        console.log("Unable to find location!")
    }
    else {
        const data = JSON.parse(response.body)
        console.log(data.current)
    }
})
