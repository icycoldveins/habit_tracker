// Backend/src/server.js

// Import necessary modules
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

// Initialize Sequelize and connect to the PostgreSQL database
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

// Define the User model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Registration route
app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user to the database
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user in the database
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    // Generate an authentication token
    const token = jwt.sign(
      { username: user.username, userId: user.id },
      "your-secret-key",
      { expiresIn: "1h" }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
