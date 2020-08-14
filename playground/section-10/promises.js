const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1])
        reject("Thing went wrong")
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log("Success", result)
}).catch((error) => {
    console.log("Error", error)
})
