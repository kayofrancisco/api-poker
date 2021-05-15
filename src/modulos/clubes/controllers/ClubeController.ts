import { Request, Response } from 'express';

import ClubeService from '../services/ClubeService';

export default class ClubeController {
  constructor(private service: ClubeService) { }

  criar(req: Request, res: Response): Response {
    const { nome, rakeback } = req.body;

    const clube = this.service.criar({ nome, rakeback });

    return res.status(201).json(clube);
  }

  listar(req: Request, res: Response): Response {
    return res.json(this.service.listar());
  }

  editar(req: Request, res: Response): Response {
    const { id } = req.params;
    const { nome, rakeback } = req.body;

    return res.json(this.service.editar(id, { nome, rakeback }));
  }

  excluir(req: Request, res: Response): Response {
    const { id } = req.params;
    return res.json(this.service.excluir(id));
  }
}
