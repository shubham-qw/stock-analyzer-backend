import { StockCandleDataProvider } from "../interfaces/StockCandleDataProvider";

export class StockCandleData {
    provider : StockCandleDataProvider;

    constructor (strategy : StockCandleDataProvider) {
        this.provider = strategy;
    }

    setProvider (strategy : StockCandleDataProvider) {
        this.provider = strategy;
    }

    async getHistoricalData (interval : string, fromDate : Date, toDate : Date, stockIndetifier : string) {
        return this.provider.getCandleHistoricalData(interval,fromDate,toDate,stockIndetifier)
    }

}