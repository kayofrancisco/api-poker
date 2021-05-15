import { Router } from 'express';

import modalidadesRoutes from './modalides.routes';

const router = Router();

router.use('/modalidades', modalidadesRoutes);

export default router;
