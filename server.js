import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import cors from 'cors'; // Import cors
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Middleware to parse JSON data
app.use(express.json());

// Serve static files from the "mernPortfolio/dist" folder
app.use(express.static(path.resolve(__dirname, 'mernPortfolio', 'dist')));

// Set up routes for the user API
app.use('/api', userRouter);

// Catch-all route to serve the index.html file for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'mernPortfolio', 'dist', 'index.html'));
});

// Retrieve Mongo URI from environment variables
const mongoUri = process.env.MONGO_URI;

// Check if the MONGO_URI is loaded correctly
if (!mongoUri) {
  console.error('Mongo URI is undefined! Please check your .env file.');
  process.exit(1);  // Exit the application if the Mongo URI is missing
}

// Connect to MongoDB
mongoose
  .connect(mongoUri, { dbName: 'mern-portfolio' })
  .then(() => console.log('MongoDB is connected!'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define the port for the server
const port = 3000;

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
