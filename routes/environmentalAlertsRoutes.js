// routes/environmentalAlertsRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (EnvironmentalAlert) => {
  // API endpoint to get all environmental alerts
  router.get('/', async (req, res) => {
    try {
      const alerts = await EnvironmentalAlert.findAll({
        attributes: ['id', 'userId', 'alertType', 'threshold'],
      });
      res.json(alerts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to get a specific environmental alert by ID
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const alert = await EnvironmentalAlert.findByPk(id, {
        attributes: ['id', 'userId', 'alertType', 'threshold'],
      });

      if (alert) {
        res.json(alert);
      } else {
        res.status(404).send('Environmental alert not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to post a new environmental alert
  router.post('/', async (req, res) => {
    const { userId, alertType, threshold } = req.body;

    try {
      const newAlert = await EnvironmentalAlert.create({
        userId,
        alertType,
        threshold,
      });

      res.json(newAlert);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to delete an environmental alert by ID
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
      const alert = await EnvironmentalAlert.findByPk(id);

      if (alert) {
        await alert.destroy();
        res.json({ message: 'Environmental alert deleted successfully' });
      } else {
        res.status(404).send('Environmental alert not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
};
