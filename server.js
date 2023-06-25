// Chunk 1
// Import required modules
const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const { log } = console;
const app = express();

const PORT = 8080;

// Chunk 2
// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle POST request to /email endpoint
app.post("/email", (req, res) => {
  // Extract email, subject, and text from the request body
  const { subject, email, text } = req.body;
  log("Data: ", req.body);

  // Check if any of the required fields are missing
  if (!email || !subject || !text) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Send email using the sendMail function
  sendMail(email, subject, text, function (err, data) {
    if (err) {
      log("ERROR: ", err);

      // If there's an error, respond with a 500 status and error message
      return res.status(500).json({ message: err.message || "Internal Error" });
    }

    log("Email sent!!!");

    // If the email is sent successfully, respond with a success message
    return res.json({ message: "Email sent!!!!!" });
  });
});

// Render home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Render error page
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "error.html"));
});

// Render email sent page
app.get("/email/sent", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "emailMessage.html"));
});

// Start the server
app.listen(PORT, () => log("Server is starting on PORT, ", 8080));
