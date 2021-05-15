import Clube from '../model/Clube';
import { IClubeRepository } from '../repositories/IClubeRepository';

interface IClubeDTO {
  nome: string;
  rakeback: number;
}

export default class ClubeService {
  constructor(private repository: IClubeRepository) { }

  criar({ nome, rakeback }: IClubeDTO): Clube {
    if (this.repository.buscarPorNome(nome)) {
      throw new Error(`Clube ${nome} já existe`);
    }

    return this.repository.criar({ nome, rakeback });
  }

  listar(): Clube[] {
    return this.repository.buscarTodos();
  }

  editar(id: string, { nome, rakeback }: IClubeDTO): Clube {
    return this.repository.editar(id, { nome, rakeback });
  }

  excluir(id: string): void {
    this.repository.excluir(id);
  }
}
