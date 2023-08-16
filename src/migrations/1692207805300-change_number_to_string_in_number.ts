import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeNumberToStringInNumber1692207805300 implements MigrationInterface {
    name = 'ChangeNumberToStringInNumber1692207805300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" integer NOT NULL`);
    }

}
