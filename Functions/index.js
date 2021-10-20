// **************** Callback Function **************** //

const add = (a, b, callback) => {
    callback(a + b)
}

add(1, 4, (sum) => {
    console.log(sum)
})

// Output: 5
