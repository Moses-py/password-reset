const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require("../../models/user__model")


module.exports = (newPassword, userID) => {
    bcrypt.hash(newPassword, saltRounds, (err, hash) => {
        if(err) {
            
            return err
            
        } else {
            
            User.findByIdAndUpdate(userID, {$set: {password: hash}}).then(result => {
                if(!result) {
                    return "Error encountered, try again"
                    // Error handling
                } else {
                    return "Password successfully updated"
                    // redirect to login route
                }
            })
        }
    });
}
