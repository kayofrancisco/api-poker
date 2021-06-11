import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import Clube from '../entities/Clube';
import { IClubeRepository } from '../repositories/IClubeRepository';

interface IClubeDTO {
  nome: string;
  rakeback: number;
}

@injectable()
export default class ClubeService {
  constructor(
    @inject('ClubeRepository')
    private repository: IClubeRepository,
  ) { }

  async criar({ nome, rakeback }: IClubeDTO): Promise<Clube> {
    await this.validaClube({ nome, rakeback });

    const clube = await this.repository.criar({ nome, rakeback });
    return clube;
  }

  async listar(): Promise<Clube[]> {
    const clubes = await this.repository.buscarTodos();

    return clubes;
  }

  async editar(id: string, { nome, rakeback }: IClubeDTO): Promise<Clube> {
    const clube = await this.repository.editar(id, { nome, rakeback });
    return clube;
  }

  async excluir(id: string): Promise<void> {
    await this.repository.excluir(id);
  }

  private async validaClube({ nome }: IClubeDTO): Promise<void> {
    const errors = [];

    if (!nome) {
      errors.push('Nome do clube deve ser informado');
    }

    if (nome) {
      const clubeExiste = await this.repository.buscarPorNome(nome);

      if (clubeExiste) {
        errors.push(`Clube ${nome} já existe`);
      }
    }

    if (errors.length > 0) {
      throw new AppError(errors);
    }
  }
}
