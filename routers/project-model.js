const db = require('../data/dbConfig');

module.exports = {
  getProjects,
  addProject
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