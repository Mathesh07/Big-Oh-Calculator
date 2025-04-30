// routes/analysisRoutes.js
import express from 'express';
import { analyzeCode } from '../controllers/analysisController.js';

const router = express.Router();

router.post('/calculate', analyzeCode);

export default router;
