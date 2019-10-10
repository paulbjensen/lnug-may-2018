// Dependencies
const os = require('os');
const platform = os.platform();

// Check if we are running on CircleCI or Mac OS X
const isMacOrCI = process.env.CIRCLECI || platform === 'darwin';

// Set the localhost dataas host config based on the OS check
const host = isMacOrCI ? '127.0.0.1' : '/var/run/postgresql';

const config = {
	// Put what SQL database client you wish to connect with
	client: 'postgresql',
	connection: {
		// Give your database a name
		database: 'getting_started',
		// Define the host
		host,
		// Define a user
		user: 'postgres'
		// No password needed on local machine
	},

	// Tell Knex what table namespace is used for migrations metadata
	migrations: {
		tableName: 'knex_migrations'
	}
};

module.exports = config;
