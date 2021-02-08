const User = require("../../models/user__model")
const nodemailer = require("../nodemailer/nodemailer")

module.exports = async (passwordResetEmail) => {

    await User.findOne({email: passwordResetEmail}).then(userFound => {

        if(!userFound) {
            return "User not found"
            
        } else {

            const { email, _id } = userFound

            nodemailer(email, _id)
            
            return "Message sent"

        }
    })

}
