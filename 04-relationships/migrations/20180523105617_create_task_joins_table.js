const tableName = 'task_joins';

exports.up = knex => {
	// Create the task_joins table
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table
			.integer('dependent_id')
			.references('id')
			.inTable('tasks');
		table
			.integer('dependency_id')
			.references('id')
			.inTable('tasks');
		table.timestamps(true, true);
	});
};

exports.down = knex => {
	// Drop the task_joins table
	return knex.schema.dropTableIfExists(tableName);
};
