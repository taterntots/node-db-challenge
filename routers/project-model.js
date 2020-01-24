const db = require('../data/dbConfig');

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  getTaskById,
  addTask
}

// *****************************************
// gets a list of all projects
// *****************************************
function getProjects() {
  return db('projects');
}
// *****************************************
// gets a specific project by id
// *****************************************
function getProjectById(projectId) {
  return db('projects')
    .where({ id: projectId})
    .first();
}
// *****************************************
// add a new project to the list
// *****************************************
function addProject(newProject) {
  return db('projects')
    .insert(newProject)
    .then(([id]) => {
      return getProjectById(id);
    })
}


// *****************************************
// gets a specific tasks by id
// *****************************************
function getTaskById(tasksId) {
  return db('tasks')
    .where({ id: tasksId})
    .first();
}
// *****************************************
// add a Task to the list
// *****************************************
// function addTask(newTask, project_id) {
//   return db('tasks')
//     .insert(newTask, 'id')
//     .then(([id]) => {
//       return getTaskById(id);
//     })
// }
function addTask(newTask, project_id) {
  return db
    .insert(newTask, 'id')
    .into('tasks')
    .where({ project_id: project_id })
}