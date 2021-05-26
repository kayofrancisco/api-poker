import { Router } from 'express';

import ModalidadeController from '../modulos/modalidades/controllers/ModalidadeController';

const modalidadesRoutes = Router();

const modalidadeController = new ModalidadeController();

// modalidadesRoutes.post('/', modalidadeController.);

modalidadesRoutes.get('/', modalidadeController.listar);

// modalidadesRoutes.put('/:id', modalidadeController);

// modalidadesRoutes.delete('/:id', modalidadeController);

export default modalidadesRoutes;
