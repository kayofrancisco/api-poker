import { v4 as Uuidv4 } from 'uuid';

import Clube from '../../clubes/model/Clube';
import Modalidade from '../../modalidades/model/Modalidade';

export default class Partida {
  id: string;
  clube: Clube;
  modalidade: Modalidade;
  numeroJogadores: number;
  horarioInicio: Date;
  duracao: Date;
  humor: string;
  mesaAgressiva: boolean;
  blinds: number;
  ganhos: number;

  constructor() {
    if (!this.id) {
      this.id = Uuidv4();
    }
  }
}
