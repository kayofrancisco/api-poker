import { Request, Response } from "express";
import { container } from "tsyringe";
import TransacaoService from "../services/TransacaoService";

export default class TransacaoController {
    async criar(req: Request, res: Response): Promise<Response> {
        const { idClube, valor, tipoTransacao } = req.body;

        const service = container.resolve(TransacaoService);

        return res.status(201).json(await service.criar({ valor, idClube, tipoTransacao }))
    }

    async buscarTodos(req: Request, res: Response): Promise<Response> {
        const service = container.resolve(TransacaoService);
        return res.json(await service.buscarTodos());
    }

    async buscarPorClube(req: Request, res: Response): Promise<Response> {
        const { idClube } = req.query;

        const service = container.resolve(TransacaoService);

        return res.json(await service.buscarPorClube(idClube as string));
    }

    async buscarPorTipoTransacao(req: Request, res: Response): Promise<Response> {
        const { tipoTransacao } = req.query;

        const service = container.resolve(TransacaoService);

        return res.json(await service.buscarPorTipoTransacao(tipoTransacao as 'entrada' | 'saida'));
    }

    async excluir(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const service = container.resolve(TransacaoService);


        return res.json(await service.excluir(id));
    }
}