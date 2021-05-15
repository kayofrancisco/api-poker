import { Router } from 'express';

import clubesRoutes from './clubes.routes';
import modalidadesRoutes from './modalides.routes';

const router = Router();

router.use('/modalidades', modalidadesRoutes);
router.use('/clubes', clubesRoutes);

export default router;
