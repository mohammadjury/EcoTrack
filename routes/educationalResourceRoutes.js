// routes/educationalResourceRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (EducationalResource) => {
  // API endpoint to get all educational resources
  router.get('/', async (req, res) => {
    try {
      const resources = await EducationalResource.findAll({
        attributes: ['id', 'title', 'description', 'url'],
      });
      res.json(resources);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to get specific educational resource by ID
  router.get('/:id', async (req, res) => {
    try {
      const resourceId = req.params.id;
      const resource = await EducationalResource.findByPk(resourceId, {
        attributes: ['id', 'title', 'description', 'url'],
      });

      if (!resource) {
        return res.status(404).json({ error: 'Educational resource not found' });
      }

      res.json(resource);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to delete an educational resource by ID
  router.delete('/:id', async (req, res) => {
    const resourceId = req.params.id;
    try {
      const deletedRows = await EducationalResource.destroy({
        where: {
          id: resourceId,
        },
      });

      if (deletedRows === 0) {
        return res.status(404).json({ message: 'Educational resource not found' });
      }

      res.status(200).send("Deleted Successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // API endpoint to create a new educational resource
  router.post('/', async (req, res) => {
    const { title, description, url } = req.body;
    try {
      const newResource = await EducationalResource.create({
        title,
        description,
        url,
      });

      res.status(201).json(newResource);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

   // API endpoint to update an educational resource
   router.put('/:id', async (req, res) => {
    const resourceId = req.params.id;
    const updatedResource = req.body;

    try {
      const [updatedRows] = await EducationalResource.update(updatedResource, {
        where: { id: resourceId },
      });

      if (updatedRows > 0) {
        res.send('Educational resource updated successfully');
      } else {
        res.status(404).send('Educational resource not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });



  return router;
};
