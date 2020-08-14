const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiYW5tb2xzdWtraSIsImEiOiJja2NvNHFwNGIwMGNtMnJvMWFmaXI3dWMzIn0.niCruTfnAOrVPIa7-PjlUw"
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect lcation service!", undefined)
        }
        else if(response.body.features.length === 0) {
            callback("Unable to find loaction, Try another search.", undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode