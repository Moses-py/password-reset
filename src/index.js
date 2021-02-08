require('dotenv').config();
const express = require("express")
const bodyParser = require("body-parser")

// Configure app to use express
const app = express()

// Configure express to use body-parser
app.use(bodyParser.urlencoded({extended: true}))

// middleware routes
const reset__password = require("./controller/password-reset/password_reset")
const set_new_password = require("./controller/password-reset/set_new_password")


app.route("/password-reset")

.post(async (req, res) => {

    const {email} = req.body;
    await reset__password(email)
}) 

app.route("/set_new_password/:userID")

.post((req, res) => {
    const { userID } = req.params
    const { password } = req.body;

    console.log(userID, password);
    set_new_password(password, userID)
} )



app.listen(3000, () => {
    console.log(`Server started on port: 3000`);
})