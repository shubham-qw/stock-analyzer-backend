class Database {

    async connect () {
        throw new Error(`Connect function not implemented.`)
    }

    async poolConnect () {
        throw new Error(`PoolConnect function not implemented.`)
    }

    async query () {
        throw new Error(`Query function not implemented.`)
    }

    async poolDisconnect () {
        throw new Error(`PoolDisconnect function not implemented.`)
    }

    async disconnect () {
        throw new Error(`Disconnect function not implemented.`)
    }
}

module.exports = Database;