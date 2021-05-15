import { Router } from 'express';

import clubeController from '../modulos/clubes/controllers';

const clubesRoutes = Router();

clubesRoutes.post('/', (req, res) => clubeController.criar(req, res));

clubesRoutes.get('/', (req, res) => clubeController.listar(req, res));

clubesRoutes.put('/:id', (req, res) => clubeController.editar(req, res));

clubesRoutes.delete('/:id', (req, res) => clubeController.excluir(req, res));

export default clubesRoutes;
