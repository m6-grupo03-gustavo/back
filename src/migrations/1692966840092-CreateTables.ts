import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1692966840092 implements MigrationInterface {
    name = 'CreateTables1692966840092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_images" DROP CONSTRAINT "FK_202539a18b3a1e8d6e25633f2e7"`);
        await queryRunner.query(`ALTER TABLE "car_images" ADD CONSTRAINT "FK_202539a18b3a1e8d6e25633f2e7" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_images" DROP CONSTRAINT "FK_202539a18b3a1e8d6e25633f2e7"`);
        await queryRunner.query(`ALTER TABLE "car_images" ADD CONSTRAINT "FK_202539a18b3a1e8d6e25633f2e7" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
