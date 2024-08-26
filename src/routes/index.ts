import express from 'express';
const router = express.Router();

import { spellingCorrection } from '../controllers';

router.post('/', spellingCorrection);

export default router;
