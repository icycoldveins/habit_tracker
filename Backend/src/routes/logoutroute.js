// Backend/src/routes/logoutRoute.js

const express = require("express");
const router = express.Router();

// Logout route
router.post("/api/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: "Could not log out, please try again" });
    } else {
      res.status(200).json({ message: "User logged out successfully" });
    }
  });
});

module.exports = router;
1