import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modalidades')
export default class Modalidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;
}
