import Modalidade from '../model/Modalidade';

export interface ICriarModalidadeDTO {
  nome: string;
  modo: 'Cash' | 'Torneio';
}

export interface IModalidadeRepository {
  criar({ nome, modo }: ICriarModalidadeDTO): Modalidade;
  buscarTodos(): Modalidade[];
  buscarPorNome(nome: string): Modalidade;
  editar(id: string, { nome, modo }: ICriarModalidadeDTO): Modalidade;
  excluir(id: string): void;
}
