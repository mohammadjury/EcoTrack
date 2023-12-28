// routes/authRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (UserProfiles) => {
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Authenticate user
    const user = await UserProfiles.findOne({ where: { username, password } });

    if (user) {
      // User authenticated successfully
      res.json({ message: 'Authentication successful', user });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });



  return router;
};
