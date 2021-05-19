import { Router } from 'express';

import partidaController from '../modulos/partidas/controllers';

const partidasRoutes = Router();

partidasRoutes.post('/', (req, res) => partidaController.criar(req, res));

partidasRoutes.get('/', (req, res) => partidaController.listar(req, res));

partidasRoutes.put('/:id', (req, res) => partidaController.editar(req, res));

partidasRoutes.delete('/:id', (req, res) => partidaController.excluir(req, res));

export default partidasRoutes;
