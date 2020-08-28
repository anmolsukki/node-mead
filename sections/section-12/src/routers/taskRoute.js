const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const taskRoute = new express.Router()

taskRoute.post("/task", auth, (req, res) => {
    // const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        owner: req.user.id
    })
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

taskRoute.get("/task", auth, async (req, res) => {
    try {
        await req.user.populate("tasks").execPopulate()
        res.send(req.user.tasks)
    }
    catch(error) {
        res.status(500).send()
    }
})

taskRoute.get("/task/:id", auth, async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findOne({ _id, owner: req.user._id })
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(error) {
        res.status(500).send()
    }
})

module.exports = taskRoute;
