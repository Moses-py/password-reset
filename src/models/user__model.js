const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/test`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const userModel = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String}
})

module.exports = User = mongoose.model("User", userModel)