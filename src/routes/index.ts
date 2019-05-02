import { Router } from 'express';
import menuRouter from './menu';

const router: Router = Router();

router.use('/menu', menuRouter);

export default router;
