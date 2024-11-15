import express from 'express';
import { PORT } from './config/serverConfig.js';
import { StatusCodes } from 'http-status-codes';
import connectDB from './Config/dbConfig.js';
import apiRouter from './Routers/apiRouter.js';

const app = express();  

// parsing of the data from the client side to read on server
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({
    message: 'Pong'
  });
});
app.use('/api',apiRouter);

app.listen(PORT, () => {
  console.log(`server is up at port ${PORT}`);
  connectDB();
});
