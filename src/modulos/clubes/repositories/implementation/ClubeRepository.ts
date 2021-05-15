import Clube from '../../model/Clube';
import { IClubeRepository, ICriarClubeDTO } from '../IClubeRepository';

export default class ClubeRepository implements IClubeRepository {
  private clubes: Clube[];
  private static INSTANCE: ClubeRepository;

  private constructor() {
    this.clubes = [];
  }

  public static getInstance(): ClubeRepository {
    return this.INSTANCE ? this.INSTANCE : new ClubeRepository();
  }

  criar({ nome, rakeback }: ICriarClubeDTO): Clube {
    const clube = new Clube();
    Object.assign(clube, { nome, rakeback });

    this.clubes.push(clube);

    return clube;
  }

  buscarTodos(): Clube[] {
    return this.clubes;
  }

  buscarPorNome(nome: string): Clube {
    return this.clubes.find((clube) => clube.nome === nome);
  }

  editar(id: string, { nome, rakeback }: ICriarClubeDTO): Clube {
    const clubeIndex = this.clubes.findIndex((item) => item.id === id);

    Object.assign(this.clubes[clubeIndex], { nome, rakeback });

    return this.clubes[clubeIndex];
  }

  excluir(id: string): void {
    const index = this.clubes.findIndex((item) => item.id === id);

    this.clubes.splice(index, 1);
  }
}
