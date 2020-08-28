const mongoose = require("mongoose");

const connectionURL = "mongodb://localhost:27017/task-manager-api"

mongoose.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
