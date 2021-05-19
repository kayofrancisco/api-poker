import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as Uuidv4 } from 'uuid';

@Entity('clubes')
export default class Clube {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  rakeback: number;

  @CreateDateColumn()
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = Uuidv4();
    }
  }
}
