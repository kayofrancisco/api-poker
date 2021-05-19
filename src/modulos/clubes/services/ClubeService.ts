import { inject, injectable } from 'tsyringe';

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
    const clubeExiste = await this.repository.buscarPorNome(nome);

    if (clubeExiste) {
      throw new Error(`Clube ${nome} já existe`);
    }

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
}
