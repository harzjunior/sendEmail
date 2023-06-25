//all the things we needs in other to send our email
// Import required modules
//Chunk 3
require("dotenv").config();
const nodemailer = require("nodemailer");
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

// Chunk 4
// Define mail options
const mailOptions = {
  from: "harunjibs@gmail.com",
  to: "harzkane@gmail.com",
  subject: "Hey I have a new message from you!",
  text: "I would like to see you next time around and I would like to us know when you are available.",
};

// Send email using the transporter
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    // If there's an error, pass it to the callback function
    console.log("Error sending mail");
  } else {
    // If email is sent successfully, pass the data to the callback function
    console.log("Message sent successfully");
  }
});
