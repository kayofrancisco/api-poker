import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

import Clube from '../../clubes/entities/Clube';

@Entity('transacoes')
export default class Transacao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'id_clube' })
  idClube: string;

  @ManyToOne(() => Clube)
  @JoinColumn({ name: 'id_clube' })
  clube: Clube;

  @Column()
  tipoTransacao: string;

  @Column()
  valor: number;

  @CreateDateColumn()
  criado_em: Date;
}
