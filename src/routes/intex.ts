import { Router } from 'express';

import clubesRoutes from './clubes.routes';
import modalidadesRoutes from './modalidades.routes';
import partidasRoutes from './partidas.rolutes';

const router = Router();

router.use('/modalidades', modalidadesRoutes);
router.use('/clubes', clubesRoutes);
router.use('/partidas', partidasRoutes);

export default router;
