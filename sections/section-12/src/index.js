const express = require("express");
const userRoute = require("./routers/userRoute");
const bcrypt = require("bcryptjs");
require("./db/mongoose");

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoute)

app.listen(port, () => {
    console.log("Server is up on port", 3000)
})
