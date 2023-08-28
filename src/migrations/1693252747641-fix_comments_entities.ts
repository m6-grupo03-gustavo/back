import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCommentsEntities1693252747641 implements MigrationInterface {
    name = 'FixCommentsEntities1693252747641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_user_comments" ADD "register_date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_user_comments" DROP COLUMN "register_date"`);
    }

}
