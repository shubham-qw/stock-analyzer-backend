import express from 'express';
import RestRoutes from './rest';

const router = express.Router();

router.use(`/rest`, RestRoutes);

export default router;