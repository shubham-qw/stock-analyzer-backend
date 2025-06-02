import {StockCandleDataContext} from '../context';
import { StockCandle } from '../interfaces/StockCandle';

interface CandleFilter {
        fromDate : Date,
        toDate : Date,
        interval : string,
        stockIdentifier : string
    }

class StockAnalysisService {

    async getCandleData ({fromDate , toDate, stockIdentifier , interval} : CandleFilter) : Promise<StockCandle[]> {

        const stockCandles = await StockCandleDataContext.getHistoricalData(interval,fromDate,toDate,stockIdentifier);
        
        return stockCandles;
    }
}

export default StockAnalysisService;