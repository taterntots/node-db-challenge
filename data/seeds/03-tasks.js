exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, task_description: 'Create a database', task_notes: 'These are notes', project_id: 1, complete: true },
        { id: 2, task_description: 'Get your migrations working', task_notes: 'These are more notes', project_id: 1, complete: false },
        { id: 3, task_description: 'Create some seed data for the database', task_notes: 'These are the most notes', project_id: 1, complete: false },
        { id: 4, task_description: 'Make your final commit on your branch', task_notes: 'Do not look at these notes. They are embarrassing.', project_id: 2, complete: true },
        { id: 5, task_description: 'Merge your branch with the master', task_notes: 'I do not even know what notes are anymore', project_id: 2, complete: false },
        { id: 6, task_description: 'Research Restful APIs', task_notes: 'Google is your friend', project_id: 3, complete: false },
        { id: 7, task_description: 'Get on a call with React II about a login issue', task_notes: 'The problem has something to do with authentication tokens', project_id: 3, complete: true }
      ])
    })
}