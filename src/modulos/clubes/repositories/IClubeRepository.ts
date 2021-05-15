import Clube from '../model/Clube';

export interface ICriarClubeDTO {
  nome: string;
  rakeback: number;
}

export interface IClubeRepository {
  criar({ nome, rakeback }: ICriarClubeDTO): Clube;
  buscarTodos(): Clube[];
  buscarPorNome(nome: string): Clube;
  editar(id: string, { nome, rakeback }: ICriarClubeDTO): Clube;
  excluir(id: string): void;
}
