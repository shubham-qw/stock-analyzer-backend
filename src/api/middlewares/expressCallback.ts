import { Response, Request } from "express";

export function makeExpressCallback(ControllerFunction : any) {

    return function (req: Request, res: Response) {
        const httpBody = {
            params: req.params,
            query: req.query,
            body: req.body
        }

        ControllerFunction(httpBody)
            .then((httpResponse: HttpResponse) => {
                const { message, data, statusCode } = httpResponse;
                res.status(statusCode).send({message,data})
            })
            .catch((errResponse : ErrResponse) => {
                console.log(errResponse);
                res.send();
            })
    }
}