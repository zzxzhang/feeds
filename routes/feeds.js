import express from 'express';
const router = express.Router();
import {getFeeds} from '../controllers/feed.js';

// get feeds
router.get('/api/feeds', getFeeds);

export default router
