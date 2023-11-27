// Backend/src/models/user.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection"); // Import the Sequelize connection

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add other user attributes as needed
});

module.exports = User;
