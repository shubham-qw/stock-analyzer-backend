export default interface DataAccess{
    create() : Promise<any>;
    createMany () : Promise<any>;
    updateOne() : Promise<any>;
    updateMany() : Promise<any>;
    deleteOne() : Promise<any>;
    deleteMany() : Promise<any>;
    findOne() : Promise<any>;
    findMany() : Promise<any>;
}