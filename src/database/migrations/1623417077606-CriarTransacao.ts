import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarTransacao1623417077606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'transacoes',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'id_clube',
        type: 'uuid',
      },
      {
        name: 'tipo_transacao',
        type: 'varchar',
      },
      {
        name: 'valor',
        type: 'decimal(10,2)',
      },
      {
        name: 'criado_em',
        type: 'timestamp',
        default: 'now()',
      }],
      foreignKeys: [
        {
          columnNames: ['id_clube'],
          referencedColumnNames: ['id'],
          referencedTableName: 'clubes',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transacoes');
  }
}
