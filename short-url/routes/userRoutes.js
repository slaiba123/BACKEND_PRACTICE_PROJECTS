import express from 'express';
import { handleShortUrl,handleredirectUrl,handleAnalytics } from '../controllers/shortUrlController.js';

const router = express.Router();

router.post('/', handleShortUrl);
router.get('/:shortId',handleredirectUrl);
router.get('/analytics/:shortId',handleAnalytics)
export default router;

