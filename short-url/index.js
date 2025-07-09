import express from 'express';
import dotenv from 'dotenv';         
import connectDB from './connection.js';
import router from './routes/userRoutes.js';
dotenv.config();                     

const app = express();
const PORT = 3000;

// Middleware to parse JSON (important if you're receiving JSON data)
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/url', router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
