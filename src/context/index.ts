import { StockCandleData } from "./StockCandleData";
import { upstockProvider } from "../adapters/upstoxAdaptor";
import createBrokerHttpClient from "../lib/brokerHttpClient";
import config from '../config/config.json';

const upstoxConfig = config.vendor.upstox;
const upstoxClient = createBrokerHttpClient({baseUrl : upstoxConfig.baseUrl, accessToken : upstoxConfig.accessToken});


const upstockStrategy = new upstockProvider(upstoxClient);

const StockCandleDataContext =  new StockCandleData(upstockStrategy);

export {StockCandleDataContext};