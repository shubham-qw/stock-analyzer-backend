import genId from '../lib/uuidGenerator';

class Model {
    _id : string;
    created_by : string | null;
    created_at : Date | null;
    updated_by : string | null;
    updated_at : Date | null;

    constructor () {
        this._id = this.generateId();
        this.created_at = new Date();
        this.updated_at = null;
        this.updated_by = null;
        this.created_by = null;
    }

    generateId () {
        return genId();
    }

    set CreatedBy (userId : string) {
        this.created_by = userId;
    }

    set UpdatedAt (updateDate : Date) {
        this.updated_at = updateDate;
    }

    set UpdatedBy (userId : string) {
        this.updated_by = userId;
    }
}

export default Model;