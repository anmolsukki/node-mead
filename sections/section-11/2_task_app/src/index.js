const express = require("express");
const User = require("./models/user");
const userRoute = require("./routers/userRoute");
require("./db/mongoose");

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoute)

app.post("/task", async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log("Server is up on port", 3000)
})