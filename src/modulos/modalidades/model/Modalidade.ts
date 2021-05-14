import { v4 as Uuidv4 } from 'uuid';

export default class Modalidade {
  id: string;
  nome: string;
  modo: 'Cash' | 'Torneio';

  constructor() {
    if (!this.id) {
      this.id = Uuidv4();
    }
  }
}
