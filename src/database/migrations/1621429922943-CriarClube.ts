import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarClube1621429922943 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'clubes',
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
      },
      {
        name: 'rakeback',
        type: 'decimal',
      },
      {
        name: 'criado_em',
        type: 'timestamp',
        default: 'now()',
      }],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clubes');
  }
}
