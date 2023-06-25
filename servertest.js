const express = require("express");
const app = express();
const path = require("path");
const log = console.log;

const PORT = 8080;

//chunk 2
// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// Render home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); //send the user a file (html file)
});

// email
app.post("/email", (req, res) => {
  // TODOS
  //send email here
  log("Data: ", req.body);
  res.json({ message: "Msg received !!!" });
});

// Start server
app.listen(PORT, () => log("Server is starting on PORT, ", 8080));
