import express from 'express';
import cors from 'cors';
import { mongoose } from 'mongoose';
import 'dotenv/config';
import router from './Routes/userRoute.js';

const app = express();
app.use(express.json());

app.use(cors());

// app.use('/api/users', router);

app.post('/api/users/register', (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
const LOCALHOST = process.env.HOST || "localhost";
const URI = process.env.ATLAS_URI;

app.get('/', (req, res) => {
  res.send("Hello");
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on: http://${LOCALHOST}:${PORT}`);
});

//DB Connection
(async () => {
  try {
    await mongoose.connect(URI);
    console.log(`:)  MongoDB connection established!`);
  } catch (err) {
    console.error(`:(  MongoDB connection failed:`, err);
    throw err;
  }
})();