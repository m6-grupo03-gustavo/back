import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExpirationForToken1692968029592 implements MigrationInterface {
    name = 'AddExpirationForToken1692968029592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token_expiration" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token_expiration"`);
    }

}
