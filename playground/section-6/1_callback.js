// setTimeout
setTimeout(() => {
    console.log("2 second up")
}, 2000)



// Filter method
const names = ["Anmol", "james", "jane"]
names.filter(name => {
    console.log("===names", name.length < 5)
    return name.length < 3
})



// function declaration
const geocode = (address) => {
    const data = {
        lattitude: 0,
        langitude: 0
    }
    return data
}
const data = geocode("Philipines")
console.log("===data", data)



// Callback Function
const geocodeCallback = (address, callback) => {
    setTimeout(() => {
        const data = {
            lattitude: 1,
            langitude: 1
        }
        callback(data)
    }, 2000)
}
geocodeCallback("Philipines", (data) => {
    console.log("===data", data)
})



// callback add function

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (data) => {
    console.log(data)
})