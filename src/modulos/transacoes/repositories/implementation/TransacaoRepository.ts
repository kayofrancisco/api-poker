import { getRepository, Repository } from 'typeorm';

import Transacao from '../../entities/Transacao';
import { ICriarTransacaoDTO, ITransacaoRepository } from '../ITransacaoRepository';

export default class TransacaoRepository implements ITransacaoRepository {
  private repository: Repository<Transacao>

  public constructor() {
    this.repository = getRepository(Transacao);
  }

  async criar({ idClube, tipoTransacao, valor }: ICriarTransacaoDTO): Promise<Transacao> {
    const transacao = await this.repository.save(this.repository.create({ idClube, tipoTransacao, valor }));

    return transacao
  }
  async buscarTodos(): Promise<Transacao[]> {
    const transacoes = await this.repository.find();
    return transacoes;
  }
  async buscarPorClube(idClube: string): Promise<Transacao[]> {
    const transacoes = await this.repository.find({ where: { idClube } });

    return transacoes;
  }
  async buscarPorTipoTransacao(tipoTransacao: 'entrada' | 'saida'): Promise<Transacao[]> {
    const transacoes = await this.repository.find({ where: { tipoTransacao } });

    return transacoes;
  }
  async excluir(id: string): Promise<void> {
    this.repository.delete(id);
  }
}
