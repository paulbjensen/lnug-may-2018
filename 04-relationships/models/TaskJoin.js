/* Dependencies */
const { Model } = require('objection');
const db = require('../db');

// Pass the Knex connection to Objection
Model.knex(db);

class TaskJoin extends Model {
	// Tells Objection what the db table is for this model
	static tableName() {
		return 'task_joins';
	}
}

// Expose the model as the public API
module.exports = TaskJoin;
