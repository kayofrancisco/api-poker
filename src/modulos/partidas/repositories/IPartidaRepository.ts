/* eslint-disable max-len */
import Clube from '../../clubes/model/Clube';
import Modalidade from '../../modalidades/model/Modalidade';
import Partida from '../model/Partida';

export interface ICriarPartidaDTO {
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

export interface IPartidaRepository {
  criar({
    clube, modalidade, numeroJogadores, horarioInicio, duracao, humor, mesaAgressiva, blinds, ganhos,
  }: ICriarPartidaDTO): Partida;
  buscarTodos(): Partida[];
  editar(id: string, {
    clube, modalidade, numeroJogadores, horarioInicio, duracao, humor, mesaAgressiva, blinds, ganhos,
  }: ICriarPartidaDTO): Partida;
  excluir(id: string): void;
}
