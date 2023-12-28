const express = require('express');
const router = express.Router();

module.exports = (EnvironmentalData) => {
  // API endpoint to get all environmental data
  router.get('/', async (req, res) => {
    try {
      const data = await EnvironmentalData.findAll();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to insert environmental data
  router.post('/', async (req, res) => {
    try {
      const newData = await EnvironmentalData.create(req.body);
      res.json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to get specific environmental data by ID
  router.get('/:id', async (req, res) => {
    const dataId = req.params.id;

    try {
      const data = await EnvironmentalData.findByPk(dataId);

      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to delete environmental data by ID
  router.delete('/:id', async (req, res) => {
    const dataId = req.params.id;

    try {
      const deletedRows = await EnvironmentalData.destroy({
        where: {
          id: dataId,
        },
      });

      if (deletedRows > 0) {
        res.json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

 

  // API endpoint to update environmental data
  router.put('/:id', async (req, res) => {
    const dataId = req.params.id;
    const updatedData = req.body;

    try {
      const [updatedRows] = await EnvironmentalData.update(updatedData, {
        where: { id: dataId },
      });

      if (updatedRows > 0) {
        res.send('Environmental data updated successfully');
      } else {
        res.status(404).send('Environmental data not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
  
  return router;
};
