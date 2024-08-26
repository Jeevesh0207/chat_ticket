import express from 'express';
const router = express.Router();

import { getResponse } from '../controllers';

router.post('/', getResponse);

export default router;
