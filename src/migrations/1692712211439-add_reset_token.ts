import { MigrationInterface, QueryRunner } from "typeorm";

export class AddResetToken1692712211439 implements MigrationInterface {
    name = 'AddResetToken1692712211439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}
