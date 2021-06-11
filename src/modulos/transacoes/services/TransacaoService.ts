import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import ClubeService from '../../clubes/services/ClubeService';
import Transacao from '../entities/Transacao';
import { ICriarTransacaoDTO, ITransacaoRepository } from '../repositories/ITransacaoRepository';

@injectable()
export default class TransacaoService {
  constructor(
    @inject('TransacaoRepository')
    private repository: ITransacaoRepository,
  ) {
  }

  async criar({ idClube, valor, tipoTransacao }: ICriarTransacaoDTO): Promise<Transacao> {
    this.validarTransacao({ idClube, valor, tipoTransacao });

    const transacao = await this.repository.criar({ idClube, valor, tipoTransacao });
    return transacao;
  }

  async buscarTodos(): Promise<Transacao[]> {
    const transacoes = await this.repository.buscarTodos();
    return transacoes;
  }

  async buscarPorClube(idClube: string): Promise<Transacao[]> {
    const transacoes = await this.repository.buscarPorClube(idClube);

    return transacoes;
  }

  async buscarPorTipoTransacao(tipoTransacao: 'entrada' | 'saida'): Promise<Transacao[]> {
    const transacoes = await this.repository.buscarPorTipoTransacao(tipoTransacao);

    return transacoes;
  }

  async excluir(id: string): Promise<void> {
    await this.repository.excluir(id);
  }

  validarTransacao({ idClube, valor, tipoTransacao }: ICriarTransacaoDTO): void {
    const errors = [];

    if (!idClube) {
      errors.push('O clube deve ser informado');
    }

    if (!valor) {
      errors.push('O valor deve ser informado');
    } else if (valor <= 0) {
      errors.push('O valor da transação deve ser maior que zero');
    }

    if (!tipoTransacao) {
      errors.push('O tipo da transação deve ser informado');
    } else if (tipoTransacao !== 'entrada' && tipoTransacao !== 'saida') {
      errors.push('As transações só podem ser de entrada e saída');
    }

    if (errors.length > 0) {
      throw new AppError(errors);
    }
  }
}
