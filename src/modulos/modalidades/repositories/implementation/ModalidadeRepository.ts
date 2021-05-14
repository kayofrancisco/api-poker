import Modalidade from '../../model/Modalidade';
import { IModalidadeRepository, ICriarModalidadeDTO } from '../IModalidadeRepository';

export default class ModalidadeRepository implements IModalidadeRepository {
  private modalidades: Modalidade[];
  private static INSTANCE: ModalidadeRepository;

  private constructor() {
    this.modalidades = [];
  }

  public static getInstance(): ModalidadeRepository {
    return this.INSTANCE ? this.INSTANCE : new ModalidadeRepository();
  }

  criar({ nome, modo }: ICriarModalidadeDTO): Modalidade {
    const modalidade = new Modalidade();
    Object.assign(modalidade, { nome, modo });

    this.modalidades.push(modalidade);

    return modalidade;
  }

  buscarTodos(): Modalidade[] {
    return this.modalidades;
  }

  buscarPorNome(nome: string): Modalidade {
    return this.modalidades.find((modalidade) => modalidade.nome === nome);
  }

  editar(id: string, { nome, modo }: ICriarModalidadeDTO): Modalidade {
    const modalidadeIndex = this.modalidades.findIndex((item) => item.id === id);

    Object.assign(this.modalidades[modalidadeIndex], { nome, modo });

    return this.modalidades[modalidadeIndex];
  }

  excluir(id: string): void {
    const index = this.modalidades.findIndex((item) => item.id === id);

    this.modalidades.splice(index, 1);
  }
}
