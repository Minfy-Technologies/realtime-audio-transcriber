import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import { initSocket } from './config/socket.js';
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(helmet());

app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.send('server is running');
});

initSocket(server);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
