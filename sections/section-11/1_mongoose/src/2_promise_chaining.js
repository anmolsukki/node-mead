const mongoose = require("mongoose");
const connectionURL = "mongodb://localhost:27017/task-manager-api"

mongoose.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true // for not bunch of saces
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Age must be a positive number")
            }
        }
    }
})

User.findByIdAndUpdate("5f3841e3224adf0f24cbed65", { age: 28 }).then((user) => {
    console.log(user)
    return User.countDocuments({age: 28})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
