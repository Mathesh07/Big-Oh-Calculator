// server.js
import express from 'express';
import dotenv from 'dotenv';
import analysisRoutes from './routes/analysisRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { analyzeCode } from './controllers/analysisController.js';

dotenv.config();
const app = express();
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
//Here it should call routes/analysisRoute but It doesn't work I have to check that !!!
app.post('/calculate', analyzeCode);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
