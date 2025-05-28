import express from 'express';
import { makeExpressCallback } from '../../middlewares/expressCallback';
import { StockAnalysis } from '../../controllers';
const router = express();

router.get(`/candle`, makeExpressCallback(StockAnalysis.CandleData));

export default router;