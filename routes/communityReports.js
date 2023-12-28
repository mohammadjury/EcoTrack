// routes/communityReports.js
const express = require('express');
const router = express.Router();
//const { CommunityReport } = require('../models/CommunityReport');

module.exports = (CommunityReports) => {
  // API endpoint to get all community reports
  router.get('/', async (req, res) => {
    try {
      const reports = await CommunityReports.findAll({
        attributes: ['id', 'userId', 'reportTitle', 'reportDescription', 'reportDate'],
      });
      res.json(reports);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to get a specific community report by ID
  router.get('/:id', async (req, res) => {
    const reportId = req.params.id;

    try {
      const report = await CommunityReports.findByPk(reportId, {
        attributes: ['id', 'userId', 'reportTitle', 'reportDescription', 'reportDate'],
      });

      if (report) {
        res.json(report);
      } else {
        res.status(404).send('Report not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to delete a specific community report by ID
  router.delete('/:id', async (req, res) => {
    const reportId = req.params.id;

    try {
      const result = await CommunityReports.destroy({
        where: { id: reportId },
      });

      if (result) {
        res.status(200).send("Deleted Sucessfully"); // No content, successful deletion
      } else {
        res.status(404).send('Report not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to create a new community report
  router.post('/', async (req, res) => {
    const { userId, reportTitle, reportDescription, reportDate } = req.body;

    try {
      const newReport = await CommunityReports.create({
        userId,
        reportTitle,
        reportDescription,
        reportDate,
      });

      res.status(201).json(newReport);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


  // API endpoint to update a community report
  router.put('/:id', async (req, res) => {
    const reportId = req.params.id;
    const updatedReport = req.body;

    try {
      const [updatedRows] = await CommunityReports.update(updatedReport, {
        where: { id: reportId },
      });

      if (updatedRows > 0) {
        res.send('Community report updated successfully');
      } else {
        res.status(404).send('Community report not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
};
