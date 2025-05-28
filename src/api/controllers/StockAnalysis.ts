import { StockAnalysis } from "../../services";

class StockAnalysisController {
    constructor() { }

    async CandleData(httpResponse: any): Promise<HttpResponse> {
        const query = httpResponse.query;

        const { fromDate, toDate, stockIdentifier, interval } = query;

        const data = await StockAnalysis.getCandleData({ fromDate, toDate, stockIdentifier, interval });

        return {
            message: `Stock data fetched successfully.`,
            data,
            statusCode: 200
        }
    }
}

export default StockAnalysisController;