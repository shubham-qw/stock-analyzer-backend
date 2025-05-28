export {};

declare global {
    interface HttpResponse {
        message : string,
        data : any,
        statusCode : number
    }

    interface ErrResponse {
        
    }
}