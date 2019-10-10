const tableName = 'tasks';

exports.up = knex => {
	// Create the tasks table
	return knex.schema.createTable(tableName, table => {
		table.increments('id').primary();
		table.string('name');
		table.date('due_by');
		table.boolean('is_done').defaultTo(false);
		table.timestamps(true, true);
		table.unique(['name']);
	});
};

exports.down = knex => {
	// Drop the tasks table
	return knex.schema.dropTableIfExists(tableName);
};
