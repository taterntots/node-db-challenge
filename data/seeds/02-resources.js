exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'Computer', resource_description: 'This is a description.' },
        { id: 2, resource_name: 'Project Manager', resource_description: 'This is another description.' },
        { id: 3, resource_name: 'Cheat Sheet', resource_description: 'Wow. Yet another description!' },
        { id: 4, resource_name: 'Postman', resource_description: 'OK, now these descriptions are just getting ridiculous!' },
        { id: 5, resource_name: 'SQLiteStudio', resource_description: 'This description is not as impressive as the last one.' },
        { id: 6, resource_name: 'Unity', resource_description: 'Could these descriptions get any better? I think not.' },
        { id: 7, resource_name: 'API Documentation', resource_description: 'We have reached peak description quality.' },
        { id: 8, resource_name: 'GitHub', resource_description: 'Just kidding. We are back to trash tier descriptions.' }
      ])
    })
}