// Dependencies
const knex = require('knex');
const config = require('./config');

// Create the client
const db = knex(config.db);

// Expose the public API
module.exports = db;
