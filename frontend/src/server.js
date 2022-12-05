require("dotenv").config();
const express = require("express");
const nodemail = require("nodemailer");
const cors = require("cors");
const path = require("path");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

const app = express();

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://flatiron.energy");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function sendMail(fName, lName, email, phone, company, subject, message) {

  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  const transporter = nodemail.createTransport({
    service: "gmail",
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOption = {
    from: SENDER_EMAIL_ADDRESS,
    to: "sabirsaklayen83@gmail.com, info@flatiron.energy",
    subject: `${subject}`,
    html: `
    <table>
      <tr>
        <td>
          Name:
        </td>
        <td>
          ${fName} ${lName}
        </td>
      </tr>
      <tr>
        <td>
          Email:
        </td>
        <td>
        ${email}
        </td>
      </tr>
      <tr>
        <td>
          Phone:
        </td>
        <td>
        ${phone}
        </td>
      </tr>
      <tr>
        <td>
          Company:
        </td>
        <td>
        ${company}
        </td>
      </tr>
    </table>
    <br /><br />
    <p>${message}</p>`,
  };

  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      return Promise.reject(error);
    } else {
      console.log(`Email sent: ${info.response}`);
      return Promise.resolve("Message Sent Successfully!");
    }
  });
}

app.get("/*", function (req, res) {
  res.redirect('https://flatiron.energy');
});

app.post("/contact", async (req, res, next) => {
  const { fName, lName, email, phone, company, subject, message } = req.body;
  try {
    result = sendMail(fName, lName, email, phone, company, subject, message);
    res.send(result);
    console.log("Message Sent!");
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
