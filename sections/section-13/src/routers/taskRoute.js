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

// Get task?completed=true
taskRoute.get("/task", auth, async (req, res) => {
    const match = {}
    const sort = {}
    if(req.query.completed) {
        match.completed = (req.query.completed === "true")
    }
    if(req.query.sortBy) {
        const parts = req.query.sortBy.split(":")
        sort[parts[0]] = parts[1] === "desc" ? -1 : 1
    }
    try {
        await req.user.populate({
            path: "tasks",
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                // sort: {
                //     completed: -1
                // },
                sort
            }
        }).execPopulate()
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
