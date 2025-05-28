import Routes from './api/rotues';
import express from 'express';
import cors from './lib/cors';
import ErrorHandler from './middleware/errorHandler';
const app = express();

app.use(cors());
app.use('/v1.0.0', Routes);


app.use(ErrorHandler);

export default app;