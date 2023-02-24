import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { authRouter } from './routes/auth-routes';
import { usersRouter } from './routes/user-routes';
import { collectionRouter } from './routes/collection-routes';
import { collectionItemsRouter } from './routes/collectionItem-routes';
import { searchRouter } from './routes/search-routes';

const PORT = process.env.PORT || 4000;
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});
app.set('socket', io);

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/collections', collectionRouter);
app.use('/items', collectionItemsRouter);
app.use('/search', searchRouter);

(async function () {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DB_URL as string);
    httpServer.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
