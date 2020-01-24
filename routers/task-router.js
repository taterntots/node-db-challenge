const express = require('express');
const Tdb = require('./task-model');
const router = express.Router();

// *****************************************
// gets a list of all tasks
// *****************************************
router.get('/', (req, res) => {
  Tdb.getTasks()
    .then(tasks => {
      tasks.map(task => {
        if (task.completed === 0) {
          task.completed = false;
        } else {
          task.completed = true;
        }
      })
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of tasks' });
    })
})
// *****************************************
// add a new task to the list
// *****************************************
router.post('/', (req, res) => {
  Tdb.addTask(req.body, req.params.id)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error adding the task' });
    })
})

module.exports = router;