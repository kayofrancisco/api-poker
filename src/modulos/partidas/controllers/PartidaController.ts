import { Request, Response } from 'express';

import ClubeService from '../services/PartidaService';

export default class ClubeController {
  constructor(private service: ClubeService) { }

  criar(req: Request, res: Response): Response {
    const {
      clube,
      modalidade,
      numeroJogadores,
      horarioInicio,
      duracao,
      humor,
      mesaAgressiva,
      blinds,
      ganhos,
    } = req.body;

    return res.status(201).json(this.service.criar({
      clube,
      modalidade,
      numeroJogadores,
      horarioInicio,
      duracao,
      humor,
      mesaAgressiva,
      blinds,
      ganhos,
    }));
  }

  listar(req: Request, res: Response): Response {
    return res.json(this.service.listar());
  }

  editar(req: Request, res: Response): Response {
    const { id } = req.params;
    const {
      clube,
      modalidade,
      numeroJogadores,
      horarioInicio,
      duracao,
      humor,
      mesaAgressiva,
      blinds,
      ganhos,
    } = req.body;

    return res.json(this.service.editar(id, {
      clube,
      modalidade,
      numeroJogadores,
      horarioInicio,
      duracao,
      humor,
      mesaAgressiva,
      blinds,
      ganhos,
    }));
  }

  excluir(req: Request, res: Response): Response {
    const { id } = req.params;
    return res.json(this.service.excluir(id));
  }
}
