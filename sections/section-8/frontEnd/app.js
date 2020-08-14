console.log("Client side rendering!")

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const addressField = document.querySelector("#address")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = search.value
    addressField.textContent = "Loading..."

    fetch("http://localhost:4000/weather?address=" + location).then((response) => {
        console.log(response)
        response.json().then((data) => {
            if(data.error) {
                addressField.textContent = data.error
            }
            else {
                addressField.textContent = data.forecast
            }
        })
    })
})