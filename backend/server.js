require("dotenv").config();
const express = require("express");
const nodemail = require("nodemailer");
const cors = require("cors");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://fe-website-test-356121.uc.r.appspot.com/")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function sendMail(fName, lName, email, phone, company, subject, message) {
  const transporter = nodemail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FE_USER,
      pass: process.env.FE_PASSWORD,
    },
  });

  const mailOption = {
    from: email,
    to: process.env.FE_USER,
    subject: `${subject}`,
    html: `Name    : ${fName} ${lName}<br />
        Email   : ${email}<br />
        Phone   : ${phone}<br />
        Company : ${company}<br /><br />
        
        ${message}`,
  };

    transporter.sendMail(mailOption, function(error, info) {
        if (error) {
            console.log(error);
            return Promise.reject(error);
        } else {
            console.log(`Email sent: ${info.response}`);
            return Promise.resolve("Message Sent Successfully!");
        }
    })
}

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
})

app.post("/contact", async (req, res, next) => {
  const { fName, lName, email, phone, company, subject, message } = req.body;
  try {
    result = sendMail(fName, lName, email, phone, company, subject, message);
    res.send(result);
    console.log('Message Sent!');
  } catch (error) {
    res.send(err);
    console.log(error);
  } 
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, function () {
  console.log(`Server started successfully on port ${port}`);
});
