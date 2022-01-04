import express from 'express';
import schoolController from './school.controller';

const router = express.Router();

router.use('/schools', schoolController); // /schools가 있으면 schoolController를 실행

export default router;