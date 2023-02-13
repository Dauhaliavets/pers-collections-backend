import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { authRouter } from './routes/auth-routes';
import { usersRouter } from './routes/user-routes';
import { collectionRouter } from './routes/collection-routes';
import { collectionItemsRouter } from './routes/collectionItem-routes';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());

(async function () {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DB_URL as string);
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/collections', collectionRouter);
app.use('/items', collectionItemsRouter);
