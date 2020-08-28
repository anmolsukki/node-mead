const express = require("express");
const userRoute = require("./routers/userRoute");
const taskRoute = require("./routers/taskRoute");

require("./db/mongoose");

const app = express()
const port = process.env.PORT || 3005

app.use(express.json())
app.use(userRoute)
app.use(taskRoute)

app.listen(port, () => {
    console.log("Server is up on port", + port)
})
