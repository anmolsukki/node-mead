const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");

const userRoute = new express.Router()

userRoute.post("/users", (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

// userRoute.use(auth)
userRoute.get("/users", auth, (req, res) => {
    User.find({}).then((user) => {
        res.status(200).send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

userRoute.get("/users/me", auth, (req, res) => {
    res.send(req.user)
})

userRoute.get("/users/:id", auth, (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user) {
            return res.status(404).send()
        }
        res.status(200).send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

userRoute.patch("/users/:id", auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = [ "name", "email", "password", "age" ]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation) {
        return res.status(400).send({error: "Invalid updates!"})
    }
    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        await user.save()
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(error) {
        res.status(400).send(e)
    }
})

userRoute.delete("/users/me", auth, async(req, res) => {
    try {
        /* const user = await User.findByIdAndDelete(req.user._id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user) */

        
        // OR
        await req.user.remove()
        res.send(req.user)
    }
    catch(error) {
        res.status(500).send()
    }
})

userRoute.delete("/users/:id", auth, async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(error) {
        res.status(500).send()
    }
})

userRoute.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user: user.getPublicProfile(), token})
    }
    catch (error) {
        res.status(400).send()
    }
})

userRoute.post("/users/logout", auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }
    catch (error) {
        res.status(500).send()
    }
})

userRoute.post("/users/logoutAll", auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    }
    catch(error) {
        res.status(500).send()
    }
})

module.exports = userRoute;
