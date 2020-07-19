const geoCode = require("./callback_abstraction");

geoCode("gurgaon", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})
