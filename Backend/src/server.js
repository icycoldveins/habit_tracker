const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`You have visited this page ${req.session.views} times`);
  } else {
    req.session.views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
