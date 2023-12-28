// routes/sustainabilityScoresRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (SustainabilityScore) => {
  // API endpoint to get all sustainability scores
  router.get('/', async (req, res) => {
    try {
      const scores = await SustainabilityScore.findAll({
        attributes: ['id', 'userId', 'score', 'category'],
      });
      res.json(scores);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to get a specific sustainability score by ID
  router.get('/:id', async (req, res) => {
    const scoreId = req.params.id;
    try {
      const score = await SustainabilityScore.findByPk(scoreId);
      if (score) {
        res.json(score);
      } else {
        res.status(404).send('Sustainability score not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to post a new sustainability score
  router.post('/', async (req, res) => {
    const newData = req.body;
    try {
      const createdScore = await SustainabilityScore.create(newData);
      res.json(createdScore);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to delete a sustainability score by ID
  router.delete('/:id', async (req, res) => {
    const scoreId = req.params.id;
    try {
      const deletedRows = await SustainabilityScore.destroy({
        where: { id: scoreId },
      });
      if (deletedRows > 0) {
        res.send('Sustainability score deleted successfully');
      } else {
        res.status(404).send('Sustainability score not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
};
