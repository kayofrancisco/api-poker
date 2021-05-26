import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ModalidadeService from '../services/ModalidadeService';

export default class ModalidadeController {
  // criar(req: Request, res: Response): Response {
  //   const { nome, modo } = req.body;

  //   const modalidade = this.service.criar({ nome, modo });

  //   return res.status(201).json(modalidade);
  // }

  async listar(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(ModalidadeService);

    return res.json(await service.listar());
  }

  // editar(req: Request, res: Response): Response {
  //   const { id } = req.params;
  //   const { nome, modo } = req.body;

  //   return res.json(this.service.editar(id, { nome, modo }));
  // }

  // excluir(req: Request, res: Response): Response {
  //   const { id } = req.params;
  //   return res.json(this.service.excluir(id));
  // }
}
