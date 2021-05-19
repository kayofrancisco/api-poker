import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ClubeService from '../services/ClubeService';

export default class ClubeController {
  async criar(req: Request, res: Response): Promise<Response> {
    const { nome, rakeback } = req.body;

    const service = container.resolve(ClubeService);

    return res.status(201).json(await service.criar({ nome, rakeback }));
  }

  async listar(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(ClubeService);
    return res.json(await service.listar());
  }

  async editar(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, rakeback } = req.body;

    const service = container.resolve(ClubeService);

    return res.json(await service.editar(id, { nome, rakeback }));
  }

  async excluir(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = container.resolve(ClubeService);
    return res.json(await service.excluir(id));
  }
}
