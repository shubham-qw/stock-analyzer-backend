import Model from './model'

interface StockIdentifier {
    name : string,
    instrumentKey : string,
    exchangeToken : string
}

class StockIdentifierModel  extends Model implements StockIdentifier {
    name : string;
    instrumentKey : string;
    exchangeToken : string;

    constructor (data : StockIdentifier) {
        super();
        this.name = data.name;
        this.instrumentKey = data.instrumentKey;
        this.exchangeToken = data.exchangeToken;
    }

}

console.log(new StockIdentifierModel({name : 'bse', instrumentKey : 'edd', exchangeToken : 'sasa'}))

export default StockIdentifierModel;