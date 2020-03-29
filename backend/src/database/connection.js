const knex = require('knex');
const configuration = require('../../knexfile');

const dbConfiguration = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(dbConfiguration);

module.exports = connection;