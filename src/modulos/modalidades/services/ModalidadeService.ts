import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import Modalidade from '../entities/Modalidade';
import { IModalidadeRepository } from '../repositories/IModalidadeRepository';

interface IModalidadeDTO {
  nome: string;
}

@injectable()
export default class ModalidadeService {
  constructor(
    @inject('ModalidadeRepository')
    private repository: IModalidadeRepository,
  ) { }

  criar({ nome }: IModalidadeDTO): Promise<Modalidade> {
    if (this.repository.buscarPorNome(nome)) {
      throw new AppError(`Modalidade ${nome} já existe`);
    }

    return this.repository.criar({ nome });
  }

  async listar(): Promise<Modalidade[]> {
    const modalidades = await this.repository.buscarTodos();

    return modalidades;
  }

  // editar(id: string, { nome }: IModalidadeDTO): Promise<Modalidade> {
  //   return this.repository.editar(id, { nome });
  // }

  // excluir(id: string): Promise<void> {
  //   this.repository.excluir(id);
  // }
}
