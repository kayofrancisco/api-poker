import { v4 as Uuidv4 } from 'uuid';

export default class Clube {
  id: string;
  nome: string;
  rakeback: number;
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = Uuidv4();
    }

    this.criado_em = new Date();
  }
}
