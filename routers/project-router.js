const express = require('express');
const Pdb = require('./project-model');
const Tdb = require('./task-model');
const router = express.Router();

// *****************************************
// gets a list of all projects
// *****************************************
router.get('/', (req, res) => {
  Pdb.getProjects()
    .then(projects => {
      projects.map(project => {
        if (project.completed === 0) {
          project.completed = false;
        } else {
          project.completed = true;
        }
      })
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of projects' });
    })
})
// *****************************************
// add a new project to the list
// *****************************************
router.post('/', (req, res) => {
  Pdb.addProject(req.body)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error adding the project' });
    })
})
// *****************************************
// add a task to a project
// *****************************************
router.post('/:id/tasks', (req, res) => {
  Tdb.addTask(req.body, req.params.id)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error adding the task' });
    })
})

module.exports = router;