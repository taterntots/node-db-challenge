const express = require('express');
const Rdb = require('./resource-model');
const router = express.Router();

// *****************************************
// gets a list of all resources
// *****************************************
router.get('/', (req, res) => {
  Rdb.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of resources' });
    })
})
// *****************************************
// add a new resource to the list
// *****************************************
router.post('/', (req, res) => {
  Rdb.addResource(req.body)
    .then(newResource => {
      res.status(201).json(newResource);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error adding the resource' });
    })
})

module.exports = router;