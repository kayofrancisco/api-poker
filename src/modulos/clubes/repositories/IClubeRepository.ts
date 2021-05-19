import Clube from '../entities/Clube';

export interface ICriarClubeDTO {
  nome: string;
  rakeback: number;
}

export interface IClubeRepository {
  criar({ nome, rakeback }: ICriarClubeDTO): Promise<Clube>;
  buscarTodos(): Promise<Clube[]>;
  buscarPorNome(nome: string): Promise<Clube>;
  editar(id: string, { nome, rakeback }: ICriarClubeDTO): Promise<Clube>;
  excluir(id: string): Promise<void>;
}
