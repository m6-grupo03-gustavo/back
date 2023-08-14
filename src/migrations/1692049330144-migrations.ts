import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692049330144 implements MigrationInterface {
    name = 'Migrations1692049330144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "color" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "km" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "color"`);
    }

}
