import { Router } from 'express';

import clubesRoutes from './clubes.routes';
import modalidadesRoutes from './modalides.routes';

const router = Router();

router.use('/clubes', clubesRoutes);
router.use('/modalidades', modalidadesRoutes);

export default router;
