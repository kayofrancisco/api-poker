import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import Modalidade from '../../modulos/modalidades/entities/Modalidade';

export class CriarModalidade1621518250264 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'modalidades',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'nome',
        type: 'varchar',
        isUnique: true,
      }],
    }));

    await queryRunner.manager.createQueryBuilder()
      .insert()
      .into(Modalidade)
      .values([
        { nome: 'Texas' },
        { nome: 'Omaha 4' },
        { nome: 'Omaha 5' },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM modalidades');
    await queryRunner.dropTable('modalidades');
  }
}
