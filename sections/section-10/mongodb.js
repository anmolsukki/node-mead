const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = "mongodb://localhost:27017"
const databaseName = "task-manager"
const id = new ObjectID()

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log("Unable to connect to database!")
    }
    console.log("Database connected")

    const db = client.db(databaseName)

    // Insert One

    /* db.collection("user").insertOne({
        _id: id.getTimestamp(),
        name: "Anmol",
        age: 26
    }, (error, result) => {
        if(error) {
            return console.log("Unable to insert user!")
        }
        console.log(result.ops)
    }) */




    // Insert Many

    /* db.collection("user").insertMany([
        {
            name: "Anmol Kumar",
            age: 26
        },
        {
            name: "Anmol Singh",
            age: 26
        }
    ], (error, result) => {
        if(error) {
            return console.log("Unable to insert user!")
        }
        console.log(result.ops)
    }) */




    
    // Quering findOne

    /* db.collection("user").findOne({name: "Anmol"}, (error, result) => {
        if(error) {
            return console.log("Unable to fetch!")
        }
        console.log(result)
    }) */

    // findOne By _id

    /* db.collection("user").findOne({_id: new ObjectID("5f367da0dadd8f0238cc516d")}, (error, result) => {
        if(error) {
            return console.log("Unable to fetch!")
        }
        console.log(result)
    }) */

    // find toArray
    /* db.collection("user").find({age: 26}).toArray((error, result) => {
        if(error) {
            return console.log("Unable to fetch!")
        }
        console.log(result)
    }) */




    // find count

    /* db.collection("user").find({age: 26}).count((error, result) => {
        if(error) {
            return console.log("Unable to fetch!")
        }
        console.log(result)
    }) */





    // Updating Document $set

    /* const dbPromises = db.collection("user").updateOne({
        _id: new ObjectID("5f367da0dadd8f0238cc516d")
    }, {
        $set: {
            age: 27
        }
    })

    dbPromises.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) */




    // Updating Document $inc

    /* const dbPromises = db.collection("user").updateOne({
        _id: new ObjectID("5f367da0dadd8f0238cc516d")
    }, {
        $inc: {
            age: 1
        }
    })
    dbPromises.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) */




    // deleteOne

    /* db.collection("user").deleteOne({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) */



    // deleteMany
    db.collection("user").deleteMany({
        age: 26
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
