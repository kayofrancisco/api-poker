import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

import Clube from '../../clubes/entities/Clube';
import Modalidade from '../../modalidades/entities/Modalidade';

@Entity('partidas')
export default class Partida {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'id_clube' })
  idClube: string;

  @ManyToOne(() => Clube)
  @JoinColumn({ name: 'id_clube' })
  clube: Clube;

  @Column()
  id_modalidade: string;

  @ManyToOne(() => Modalidade)
  @JoinColumn({ name: 'id_modalidade' })
  modalidade: Modalidade;

  @Column()
  numeroJogadores: number;

  @Column()
  horarioInicio: Date;

  @Column()
  duracao: Date;

  @Column()
  humor: string;

  @Column()
  mesaAgressiva: boolean;

  @Column()
  blinds: number;

  @Column()
  ganhos: number;
}
