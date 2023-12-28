// routes/userProfilesRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (UserProfiles) => {
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await UserProfiles.findOne({
        where: { username, password },
        attributes: ['id', 'username', 'email'],
      });

      if (user) {
        // If the user exists and the password matches
        res.json({
          message: 'Authentication successful',
          user,
        });
      } else {
        // If the user or password is incorrect
        res.status(401).json({
          message: 'Bad username or password',
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error',
      });
    }


  });

  // API endpoint to get all user profiles
  router.get('/', async (req, res) => {
    try {
      const profiles = await UserProfiles.findAll();
      res.json(profiles);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to get a specific user profile by username
  router.get('/:username', async (req, res) => {
    const username = req.params.username;
    try {
      const profile = await UserProfiles.findOne({ where: { username } });
      if (profile) {
        res.json(profile);
      } else {
        res.status(404).send('User profile not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to post a new user profile
  router.post('/', async (req, res) => {
    const newProfileData = req.body;
    try {
      const createdProfile = await UserProfiles.create(newProfileData);
      res.json(createdProfile);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to delete a user profile by username
  router.delete('/:username', async (req, res) => {
    const username = req.params.username;
    try {
      const deletedRows = await UserProfiles.destroy({ where: { username } });
      if (deletedRows > 0) {
        res.send('User profile deleted successfully');
      } else {
        res.status(404).send('User profile not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


   // API endpoint to update an existing user profile by username
   // API endpoint to update a user profile
  router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;

    try {
      const [updatedRows] = await UserProfiles.update(updatedData, {
        where: { id: userId },
      });

      if (updatedRows > 0) {
        res.send('User profile updated successfully');
      } else {
        res.status(404).send('User profile not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // OPTIONS endpoint (preflight request for CORS)
  router.options('/:id', (req, res) => {
    res.sendStatus(200);
  });

  

  return router;
};
