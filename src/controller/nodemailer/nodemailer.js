require("dotenv").config()
const nodemailer = require("nodemailer");

module.exports = (userEmail, userID) => {


    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        secure: true, // this is true as port is 465
        auth: {
            user: process.env.GMAIL_USERNAME, // generated ethereal user
            pass: process.env.GMAIL_PASSWORD, // generated ethereal password
        },
    });

  // send mail with defined transport object
  let info = {    
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: userEmail, // list of receivers
        subject: "Hello ✔", // Subject line 
        text: `Click here to reset your password: http://localhost:3000/set_new_password/${userID}`, // plain text body
        html: "<p>Click here to reset your password: <b> http://localhost:3000/set_new_password/${userID}</b> </p>", // html body} ({
  };

  transporter.sendMail(info, (err,data) => {
    if(err){
        console.log(err.message)
    } else {
        console.log(data)
        console.log('Email')
    }
})

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


