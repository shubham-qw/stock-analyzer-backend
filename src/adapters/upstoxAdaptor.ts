import { StockCandleDataProvider } from "../interfaces/StockCandleDataProvider";
import { StockCandle } from "../interfaces/StockCandle";

export class upstockProvider implements StockCandleDataProvider {

    httpClient: any;

    constructor (httpClient : any) {
        this.httpClient = httpClient;
    }

    async getCandleHistoricalData(interval: string, fromDate: Date, toDate: Date, stockIndetifier: string): Promise<StockCandle[]> {

        let baseUrl = `historical-candle/`;

        baseUrl += `${stockIndetifier}/`;

        baseUrl += `${interval}/`;

        baseUrl += `${toDate}/`;

        baseUrl += fromDate;

        const response = await this.httpClient.get(baseUrl);

        const data = response.data;

        const stockCandleData : StockCandle[] = [];

        if (data.status == 'success') {

            const {candles} = data.data;

            candles.forEach( (candle : any) => {
                const stockCandle : StockCandle = {
                   timestamp : candle[0],
                   open : candle[1],
                   high : candle[2],
                   low : candle[3],
                   close : candle[4],
                   volume : candle[5]
                } 
                
                stockCandleData.push(stockCandle);
            })

        }

        return stockCandleData;
    }
}