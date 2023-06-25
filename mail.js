//all the things we needs in other to send our email
// Import required modules
const nodemailer = require("nodemailer");
require("dotenv").config();
const mailGun = require("nodemailer-mailgun-transport");

// Set up authentication credentials
const auth = {
  auth: {
    api_key: process.env.API_KEY || "MAIL_GUN_API_KEY",
    domain: process.env.DOMAIN || "MAIL_GUN_DOMAIN",
  },
};

// Create a nodemailer transporter using Mailgun and use the above auth
const transporter = nodemailer.createTransport(mailGun(auth));

// Function to send email
const sendMail = (email, subject, text, cb) => {
  // Define mail options
  const mailOptions = {
    from: email,
    to: "harzkane@gmail.com",
    subject,
    text,
  };

  // Send email using the transporter
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      // If there's an error, pass it to the callback function
      return cb(err, null);
    }
    // If email is sent successfully, pass the data to the callback function
    else {
      return cb(null, data);
    }
  });
};

module.exports = sendMail;
