const { MongoClient, ObjectID } = require("mongodb")

const connectionUrl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, {useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log("Unable to connect database")
    }
    console.log("Connected correctly!")
})
