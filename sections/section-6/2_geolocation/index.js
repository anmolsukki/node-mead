const request = require("request");

// Geocode
const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5tb2xzdWtraSIsImEiOiJja2NvNHFwNGIwMGNtMnJvMWFmaXI3dWMzIn0.niCruTfnAOrVPIa7-PjlUw"

request({url: geoCodeURL, json: true}, (error, response) => {
    if(error) {
        console.log("Unable to connect lcation service!")
    }
    else if (response.body.features.length === 0) {
        console.log("Unable to find loaction, Try another search.")
    }
    else {
        const lattitude = response.body.features[0].center[1]
        const langitude = response.body.features[0].center[0]
        console.log(lattitude, langitude)
    }
})
