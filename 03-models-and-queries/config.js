const os = require('os');
const platform = os.platform();

const isMacOrCI = process.env.CIRCLECI || platform === 'darwin';
const host = isMacOrCI ? '127.0.0.1' : '/var/run/postgresql';

const config = {
	db: {
		client: 'postgresql',
		connection: {
			database: 'models_example',
			host,
			user: 'postgres'
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
};

module.exports = config;
