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

const updateAgeCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return [user, count]
}

updateAgeCount("5f3841f1224adf0f24cbed66", 28).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})