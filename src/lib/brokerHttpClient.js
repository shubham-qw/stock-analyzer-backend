const axios = require('axios');

function createBrokerHttpClient (Config) {
    const axiosConfig = {};

    axiosConfig.baseURL = Config.baseUrl;

    if (Config.timeout) {
        axiosConfig.timeout = timeout;
    }

    axiosConfig.headers = Config.headers;

    return axios.create(axiosConfig);
}

module.exports = createBrokerHttpClient;