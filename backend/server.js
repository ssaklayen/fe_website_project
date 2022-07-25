require("dotenv").config();
const express = require("express");
const nodemail = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

async function sendMail(fName, lName, email, phone, company, subject, message) {
  const transporter = await nodemail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FE_USER,
      pass: process.env.FE_PASSWORD,
    },
  });

  const mailOption = {
    from: email,
    to: process.env.FE_USER,
    subject: subject,
    html: `New Message<br /><br />
        
        ${fName} ${lName}<br />
        ${email}<br />
        ${phone}<br />
        ${company}<br /><br />
        
        ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

app.post("/contact", async (req, res, next) => {
  const { fName, lName, email, phone, company, subject, message } = req.body;
  try {
    await sendMail(fName, lName, email, phone, company, subject, message);
    res.status(200);
    console.log('Message Sent!');
  } catch (error) {
    res.status(500);
    console.log(error);
  } 
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, function () {
  console.log(`Server started successfully on port ${port}`);
});
