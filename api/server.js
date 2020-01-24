const express = require('express'); //importing a CommonJS module
const helmet = require('helmet'); //yarn add helmet
const projectRouter = require('../routers/project-router');
const resourceRouter = require('../routers/resource-router');
const taskRouter = require('../routers/task-router');
const server = express(); //creates the server

//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server

//endpoints
server.get('/', (req, res) => {
  res.send(`Welcome to the Danger Zone!`);
});

//routes
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server