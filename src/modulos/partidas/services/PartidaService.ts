/* eslint-disable max-len */
import Clube from '../../clubes/entities/Clube';
import Modalidade from '../../modalidades/entities/Modalidade';
import Partida from '../entities/Partida';
import { IPartidaRepository } from '../repositories/IPartidaRepository';

interface ICriarPartidaDTO {
  clube: Clube;
  modalidade: Modalidade;
  numeroJogadores: number;
  horarioInicio: Date;
  duracao: Date;
  humor: string;
  mesaAgressiva: boolean;
  blinds: number;
  ganhos: number;
}

export default class PartidaService {
  constructor(private repository: IPartidaRepository) { }

  criar({
    clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
  }: ICriarPartidaDTO): Partida {
    return this.repository.criar({
      clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
    });
  }

  listar(): Partida[] {
    return this.repository.buscarTodos();
  }

  editar(id: string, {
    clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
  }: ICriarPartidaDTO): Partida {
    return this.repository.editar(id, {
      clube, modalidade, ganhos, blinds, mesaAgressiva, humor, duracao, horarioInicio, numeroJogadores,
    });
  }

  excluir(id: string): void {
    this.repository.excluir(id);
  }
}
