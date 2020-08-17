const express = require("express");
const userRoute = require("./routers/userRoute");

require("./db/mongoose");

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoute)

app.listen(port, () => {
    console.log("Server is up on port", + port)
})

