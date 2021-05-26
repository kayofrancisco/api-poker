import { getRepository, Repository } from 'typeorm';

import Modalidade from '../../entities/Modalidade';
import { IModalidadeRepository, ICriarModalidadeDTO } from '../IModalidadeRepository';

export default class ModalidadeRepository implements IModalidadeRepository {
  private repository: Repository<Modalidade>

  public constructor() {
    this.repository = getRepository(Modalidade);
  }

  async criar({ nome }: ICriarModalidadeDTO): Promise<Modalidade> {
    const modalidade = await this.repository.save(this.repository.create({ nome }));

    return modalidade;
  }

  async buscarTodos(): Promise<Modalidade[]> {
    const modalidades = await this.repository.find();
    return modalidades;
  }

  async buscarPorNome(nome: string): Promise<Modalidade> {
    const modalidade = await this.repository.findOne({ where: { nome } });
    return modalidade;
  }

  async excluir(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
