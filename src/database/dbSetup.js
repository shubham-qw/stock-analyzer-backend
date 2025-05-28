const postgres = require('../lib/adaptors/db/postgres');
const config = require('../config/config.json');

const postgresConfig = config.database.postgres;

const pgDb = new postgres(postgresConfig);

pgDb.poolConnect();

module.exports = pgDb;