const geoCode = require("./geocode");
const forecast = require("./forecast");

const address = process.argv[2]
console.log(address)

geoCode(address, (error, data) => {
    if(error) {
        return console.log(error)
    }
    forecast(data.lattitude, data.langitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }
        console.log("Currnt Tempreture is", forecastData)
    })
})
