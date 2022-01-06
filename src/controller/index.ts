import express from 'express';
import schoolController from './school.controller';
import tradeController from './trade.controller';

const router = express.Router();

// router.use('/schools', schoolController); // /schools가 있으면 schoolController를 실행

router.use('/trade', tradeController);

export default router;