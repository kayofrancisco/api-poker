import Modalidade from '../entities/Modalidade';

export interface ICriarModalidadeDTO {
  nome: string;
}

export interface IModalidadeRepository {
  criar({ nome }: ICriarModalidadeDTO): Promise<Modalidade>;
  buscarTodos(): Promise<Modalidade[]>;
  buscarPorNome(nome: string): Promise<Modalidade>;
  excluir(id: string): Promise<void>;
}
