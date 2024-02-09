const mongoose = require("mongoose")

const signUpModels = new mongoose.Schema(
    {
        "NAME": String,
        "AGE": String,
        "MOBILE" : String,
        "ADDRESS": String,
        "PINCODE": String,
        "EMAILID": String,
        "PASSWORD": String,
    }
)

module.exports =mongoose.model("Users",signUpModels)