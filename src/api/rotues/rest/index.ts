import express, { Router } from 'express';
import StockAnalyserRoutes from './StockAnalyser';
const router = express.Router();

interface DefaultRoute {
    path : string,
    route : Router
}

const defaultRoutes  : DefaultRoute[]= [
    {
        path : `/data`,
        route : StockAnalyserRoutes
    }
]

defaultRoutes.forEach((val : DefaultRoute) => {
    router.use(val.path,val.route);
})

export default router;