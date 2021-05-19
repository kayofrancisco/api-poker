import { Router } from 'express';

import ClubeController from '../modulos/clubes/controllers/ClubeController';

const clubesRoutes = Router();

const clubeController = new ClubeController();

clubesRoutes.post('/', clubeController.criar);

clubesRoutes.get('/', clubeController.listar);

clubesRoutes.put('/:id', clubeController.editar);

clubesRoutes.delete('/:id', clubeController.excluir);

export default clubesRoutes;
