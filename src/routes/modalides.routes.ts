import { Router } from 'express';

import modalidadeController from '../modulos/modalidades/controllers';

const modalidadesRoutes = Router();

modalidadesRoutes.post('/', (req, res) => modalidadeController.criar(req, res));

modalidadesRoutes.get('/', (req, res) => modalidadeController.listar(req, res));

modalidadesRoutes.put('/:id', (req, res) => modalidadeController.editar(req, res));

modalidadesRoutes.delete('/:id', (req, res) => modalidadeController.excluir(req, res));

export default modalidadesRoutes;
