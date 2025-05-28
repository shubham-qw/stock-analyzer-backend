import { Request, Response, NextFunction } from "express";

const NODE_ENV = process.env.NODE_ENV;

export interface ApiError extends Error {
    statusCode ?: number;
    isOperation : boolean;
}

export default function (err : ApiError, req : Request, res : Response, next : NextFunction) {
    const httpResponse : any = {};

    const statusCode = err.statusCode || 500;
    
    if (NODE_ENV == 'developement') {
        httpResponse.stack = err.stack;
    }

    httpResponse.message = err.message;

    res.status(statusCode).send(httpResponse);
}