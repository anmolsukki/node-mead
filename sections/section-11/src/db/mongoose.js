const mongoose = require("mongoose");
const validator = require("validator");

const connectionURL = "mongodb://localhost:27017/task-manager-api"

mongoose.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true // for not bunch of saces
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid!")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(!value.toLowerCase().includes("password")) {
                throw new Error("Password cannot contain 'password'")
            }
        }
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

const me = new User({
    name: "Anmol",
    email: "Anmol@gmail.com",
    password: "password#12", 
    age: 26
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log("Error!", error)
})
