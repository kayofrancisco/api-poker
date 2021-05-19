import Modalidade from '../entities/Modalidade';
import { IModalidadeRepository } from '../repositories/IModalidadeRepository';

interface IModalidadeDTO {
  nome: string;
  modo: 'Cash' | 'Torneio';
}

export default class ModalidadeService {
  constructor(private repository: IModalidadeRepository) { }

  criar({ nome, modo }: IModalidadeDTO): Modalidade {
    if (this.repository.buscarPorNome(nome)) {
      throw new Error(`Clube ${nome} já existe`);
    }

    return this.repository.criar({ nome, modo });
  }

  listar(): Modalidade[] {
    return this.repository.buscarTodos();
  }

  editar(id: string, { nome, modo }: IModalidadeDTO): Modalidade {
    return this.repository.editar(id, { nome, modo });
  }

  excluir(id: string): void {
    this.repository.excluir(id);
  }
}
