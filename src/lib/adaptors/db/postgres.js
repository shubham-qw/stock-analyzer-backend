const pg = require('pg');
const Pool = pg.Pool;
const Database = require('./database');

class PgDatabase extends Database {
    constructor (config = {}) {
        super();

        const {name, password, host, port, database} = config;

        if (typeof name !== 'string') {
            throw new Error (`Provide valid name`);
        }

        if (typeof port !== 'number') {
            throw new Error (`Provide valid number`);
        }

        if (typeof password !== 'string') {
            throw new Error (`Provide valid name`);
        }

        if (typeof database !== 'string') {
            throw new Error (`Provide valid database name`);
        }

        if (typeof host !== 'string') {
            throw new Error (`Provide valid host`);
        }
    }

    async poolConnect () {
        this.pool = new Pool (this.config);
    }

    async query (queryText, params = []) {
        if (!this.pool) {
            console.log(`Pool not connected`);
            await this.poolConnect();
        }
        const response = await this.pool(queryText, params);
    }
}

module.exports = PgDatabase;