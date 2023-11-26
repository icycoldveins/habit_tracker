// Backend/src/server.js

const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const app = express();
const port = 3000;

// Configure the user model (replace this with your actual user model)
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
  // Add more users as needed
];

// Configure the local strategy for passport
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect username or password" });
    }
  })
);

// Configure session management
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Your other routes and middleware
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
