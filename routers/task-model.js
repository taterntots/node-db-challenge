const db = require('../data/dbConfig');

module.exports = {
  getTasks,
  getTaskById,
  addTask
}

// *****************************************
// gets a list of all tasks
// *****************************************
function getTasks() {
  return db
    .select(
      'tasks.task_description',
      'tasks.task_notes',
      'tasks.completed',
      'projects.project_name',
      'projects.project_description'
    )
    .from('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
}
// *****************************************
// gets a specific task by id
// *****************************************
function getTaskById(taskId) {
  return db('tasks')
    .where({ id: taskId})
    .first();
}
// *****************************************
// add a new Task to the list
// *****************************************
// function addTask(newTask, project_id) {
//   return db
//     .insert(newTask, 'id')
//     .into('tasks')
//     .where({ project_id: project_id })
// }

function addTask(data) {
  return db('tasks')
    .insert(data)
    .then(id => findById(id));
}