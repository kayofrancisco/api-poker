import { getRepository, Repository } from 'typeorm';

import Clube from '../../entities/Clube';
import { IClubeRepository, ICriarClubeDTO } from '../IClubeRepository';

export default class ClubeRepository implements IClubeRepository {
  private repository: Repository<Clube>;

  constructor() {
    this.repository = getRepository(Clube);
  }

  async criar({ nome, rakeback }: ICriarClubeDTO): Promise<Clube> {
    const clube = await this.repository.save(this.repository.create({ nome, rakeback }));

    return clube;
  }

  async buscarTodos(): Promise<Clube[]> {
    const clubes = await this.repository.find();
    return clubes;
  }

  async buscarPorNome(nome: string): Promise<Clube> {
    const clube = await this.repository.findOne({ where: { nome } });

    return clube;
  }

  async editar(id: string, { nome, rakeback }: ICriarClubeDTO): Promise<Clube> {
    const clube = await this.repository.findOne({ where: { id } });

    Object.assign(clube, { nome, rakeback });

    await this.repository.save(clube);

    return clube;
  }

  async excluir(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
