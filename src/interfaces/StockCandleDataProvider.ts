import { StockCandle } from "./StockCandle";

export interface StockCandleDataProvider {
    httpClient : any;
    getCandleHistoricalData (interval : string, fromDate : Date, toDate : Date, stockIndetifier : string) : Promise<StockCandle[]>;

}