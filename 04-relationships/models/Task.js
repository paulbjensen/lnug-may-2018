/* Dependencies */
const { Model, HasManyRelation, ManyToManyRelation } = require('objection');
const db = require('../db');

// Pass the Knex connection to Objection
Model.knex(db);

class Task extends Model {
	// Tells Objection what the db table is for this model
	static tableName() {
		return 'tasks';
	}

	static get modelPaths() {
		return [__dirname];
	}

	/* Here is where we define relationships between models */
	static get relationMappings() {
		return {
			dependents: {
				relation: HasManyRelation,
				modelClass: `${__dirname}/TaskJoin`,
				join: {
					from: 'tasks.id',
					to: 'task_joins.dependency_id'
				}
			},
			dependencies: {
				relation: HasManyRelation,
				modelClass: `${__dirname}/TaskJoin`,
				join: {
					from: 'tasks.id',
					to: 'task_joins.dependent_id'
				}
			},
			dependentTasks: {
				relation: ManyToManyRelation,
				modelClass: 'Task',
				join: {
					from: 'tasks.id',
					through: {
						from: 'task_joins.dependency_id',
						to: 'task_joins.dependent_id'
					},
					to: 'tasks.id'
				}
			},
			dependencyTasks: {
				relation: ManyToManyRelation,
				modelClass: 'Task',
				join: {
					from: 'tasks.id',
					through: {
						from: 'task_joins.dependent_id',
						to: 'task_joins.dependency_id'
					},
					to: 'tasks.id'
				}
			}
		};
	}
}

// Expose the model as the public API
module.exports = Task;
