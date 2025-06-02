import DataAccess from "../interfaces/dataAccess";
import StockIdentifierModel from "../models/stockIdentifier";

const data = {
    instrumentKey : 'sas',
    exchangeToken : 'sasa',
    name : 'das'
}
class StockIdentifier implements DataAccess {
    async create(): Promise<StockIdentifierModel> {
        return new StockIdentifierModel(data);
    }

    async createMany(): Promise<StockIdentifierModel[]> {
        return [new StockIdentifierModel(data)];
    }

    async updateMany(): Promise<StockIdentifierModel[]> {
        return [new StockIdentifierModel(data)];
    }

    async updateOne(): Promise<StockIdentifierModel> {
        return new StockIdentifierModel(data);
    }

    async deleteOne(): Promise<StockIdentifierModel> {
        return new StockIdentifierModel(data);
    }

    async deleteMany(): Promise<StockIdentifierModel[]> {
        return [new StockIdentifierModel(data)];
    }

    async findOne(): Promise<StockIdentifierModel> {
        return new StockIdentifierModel(data);
    }

    async findMany(): Promise<StockIdentifierModel[]> {
        return [new StockIdentifierModel(data)];
    }
}

export default StockIdentifier;