/* Dependencies */
const { Model } = require('objection');
const db = require('../db');

// Pass the Knex connection to Objection
Model.knex(db);

class Task extends Model {
	// Tells Objection what the db table is for this model
	static tableName() {
		return 'tasks';
	}
}

// Expose the model as the public API
module.exports = Task;
