import Transacao from '../entities/Transacao';

export interface ICriarTransacaoDTO {
  idClube: string;
  tipoTransacao: 'entrada' | 'saida';
  valor: number;
}

export interface ITransacaoRepository {
  criar({ idClube, tipoTransacao, valor }: ICriarTransacaoDTO): Promise<Transacao>;
  buscarTodos(): Promise<Transacao[]>;
  buscarPorClube(idClube: string): Promise<Transacao[]>;
  buscarPorTipoTransacao(tipoTransacao: 'entrada' | 'saida'): Promise<Transacao[]>;
  excluir(id: string): Promise<void>;
}
