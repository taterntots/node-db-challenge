exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, project_name: 'Daily Project', project_description: `A project that reinforces today's material`, completed: true },
        { id: 2, project_name: 'Weekly Sprint Challenge', project_description: `A project that reinforces the past week's material`, completed: false },
        { id: 3, project_name: 'Monthly Build Week Web Application', project_description: `A project that reinforces the past month's material`, completed: false }
      ])
    })
}