exports.up = function(knex) {
  return knex.schema
// *****************************************
// PROJECTS TABLE
// *****************************************
    .createTable('projects', tbl => {
      tbl.increments();

      tbl.string('project_name', 125)
        .notNullable();
      tbl.string('project_description', 500);
      tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    })
// *****************************************
// RESOURCES TABLE
// *****************************************
    .createTable('resources', tbl => {
      tbl.increments();

      tbl.string('resource_name', 125)
        .unique()
        .notNullable();
      tbl.string('resource_description', 500)
    })
// *****************************************
// TASKS TABLE
// *****************************************
    .createTable('tasks', tbl => {
      tbl.increments();

      tbl.string('task_description', 500)
        .notNullable();
      tbl.string('task_notes', 500)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    })
// *****************************************
// PROJECT_RESOURCES TABLE
// *****************************************
    .createTable('project_resources', tbl => {
      tbl.increments();

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources');
}