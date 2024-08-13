// api/server.js
import express from 'express';
import connectDB from '../db/index.js';
import dotenv from 'dotenv';
import cors from 'cors';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

import bookRouter from '../routes/book.routes.js';
import userRouter from '../routes/user.routes.js';

// Define routes
app.use('/books', bookRouter);
app.use('/user', userRouter);

connectDB()
  .then(() => {
    console.log('⚙️ Connected to MongoDB');
  })
  .catch((err) => {
    console.log('MONGO db connection failed !!! ', err);
  });

// Export the app as a serverless function
export const handler = serverless(app);
