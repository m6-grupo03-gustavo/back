import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveNameFromCar1692364854953 implements MigrationInterface {
    name = 'RemoveNameFromCar1692364854953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "name" character varying NOT NULL`);
    }

}
