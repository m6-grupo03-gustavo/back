import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumColorKm1691774357180 implements MigrationInterface {
    name = 'AddColumColorKm1691774357180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "color" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "km" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "color"`);
    }

}
