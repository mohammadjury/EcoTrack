// routes/opendataaccessRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (OpenDataAccess) => {
  router.get('/', async (req, res) => {
    try {
      const records = await OpenDataAccess.findAll();
      res.json(records);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
router.get('/:idOrResearcherId', async (req, res) => {
    const { idOrResearcherId } = req.params;
    try {
      const record = await OpenDataAccess.findOne({
        where: {
          [Op.or]: [{ id: idOrResearcherId }, { researcherId: idOrResearcherId }]
        }
      });
      if (record) {
        res.json(record);
      } else {
        res.status(404).send('Open Data Access Record not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
  
router.post('/', async (req, res) => {
    const newData = req.body;
    try {
      const createdRecord = await OpenDataAccess.create(newData);
      res.json(createdRecord);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
router.delete('/:id', async (req, res) => {
    const recordId = req.params.id;
    try {
      const deletedRows = await OpenDataAccess.destroy({
        where: { id: recordId }
      });
      if (deletedRows > 0) {
        res.send('Open Data Access Record deleted successfully');
      } else {
        res.status(404).send('Open Data Access Record not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  router.put('/:id', async (req, res) => {
    const recordId = req.params.id;
    const updatedData = req.body;
    try {
      const [updatedRows] = await OpenDataAccess.update(updatedData, {
        where: { id: recordId }
      });
      if (updatedRows > 0) {
        const updatedRecord = await OpenDataAccess.findByPk(recordId);
        res.json(updatedRecord);
      } else {
        res.status(404).send('Open Data Access Record not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  return router;
};
