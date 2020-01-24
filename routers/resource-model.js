const db = require('../data/dbConfig');

module.exports = {
  getResources,
  getResourceById,
  addResource
}

// *****************************************
// gets a list of all resources
// *****************************************
function getResources() {
  return db('resources');
}
// *****************************************
// gets a specific resource by id
// *****************************************
function getResourceById(resourceId) {
  return db('resources')
    .where({ id: resourceId})
    .first();
}
// *****************************************
// add a new resource to the list
// *****************************************
function addResource(newResource) {
  return db('resources')
    .insert(newResource)
    .then(([id]) => {
      return getResourceById(id);
    })
}