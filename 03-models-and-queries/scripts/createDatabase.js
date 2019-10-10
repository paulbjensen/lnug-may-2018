/* Dependencies */
const { Client } = require('pg');
const { db } = require('../config');
const client = new Client();

(async () => {
	await client.connect();
	await client.query(`CREATE DATABASE ${db.connection.database}`);
	await client.end();
})();
