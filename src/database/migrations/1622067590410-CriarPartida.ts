import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CriarPartida1622067590410 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'partidas',
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
        name: 'id_modalidade',
        type: 'uuid',
      },
      {
        name: 'numero_jogadores',
        type: 'int',
      }, {
        name: 'inicio',
        type: 'timestamp',
      }, {
        name: 'fim',
        type: 'timestamp',
      }, {
        name: 'humor',
        type: 'varchar',
      }, {
        name: 'mesaAgressiva',
        type: 'boolean',
      }, {
        name: 'blinds',
        type: 'decimal(5,2)',
      }, {
        name: 'ganhos',
        type: 'decimal(10,2)',
      }],
      foreignKeys: [
        {
          columnNames: ['id_clube'],
          referencedColumnNames: ['id'],
          referencedTableName: 'clubes',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        {
          columnNames: ['id_modalidade'],
          referencedColumnNames: ['id'],
          referencedTableName: 'modalidades',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('partidas');
  }
}
