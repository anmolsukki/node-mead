const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject("Number must be non negative")
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async() => {
    const sum = await add(1, 3)
    const sum2 = await add(sum, 5)
    const sum3 = await add(sum2, 7)
    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
