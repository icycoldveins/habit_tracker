// Backend/src/routes/authRoutes.js

const express = require("express");
const passport = require("../config/auth"); // Import the configured Passport.js
const bcrypt = require("bcrypt");
const User = require("../models/user"); // Import the user model

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: "User logged in successfully" });
});

module.exports = router;
