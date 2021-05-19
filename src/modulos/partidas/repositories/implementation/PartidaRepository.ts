/* eslint-disable max-len */
import Partida from '../../entities/Partida';
import { IPartidaRepository, ICriarPartidaDTO } from '../IPartidaRepository';

export default class PartidaRepository implements IPartidaRepository {
  private partidas: Partida[];
  private static INSTANCE: PartidaRepository;

  private constructor() {
    this.partidas = [];
  }

  public static getInstance(): PartidaRepository {
    return this.INSTANCE ? this.INSTANCE : new PartidaRepository();
  }

  criar({
    clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
  }: ICriarPartidaDTO): Partida {
    const partida = new Partida();
    Object.assign(partida, {
      clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
    });

    this.partidas.push(partida);

    return partida;
  }

  buscarTodos(): Partida[] {
    return this.partidas;
  }

  editar(id: string, {
    clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
  }: ICriarPartidaDTO): Partida {
    const partidaIndex = this.partidas.findIndex((item) => item.id === id);

    Object.assign(this.partidas[partidaIndex], {
      clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
    });

    return this.partidas[partidaIndex];
  }

  excluir(id: string): void {
    const index = this.partidas.findIndex((item) => item.id === id);

    this.partidas.splice(index, 1);
  }
}
