import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691516364198 implements MigrationInterface {
    name = 'Migrations1691516364198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_account_state_enum" AS ENUM('buyer', 'saller')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "birthdate" TIMESTAMP NOT NULL, "description" character varying, "zipcode" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying, "register_date" TIMESTAMP NOT NULL DEFAULT now(), "account_state" "public"."users_account_state_enum" NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_images" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "carId" integer, CONSTRAINT "PK_f7870496c0b0f5a8894cab2bde3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" character varying NOT NULL, "fuel" character varying NOT NULL, "value" integer NOT NULL, "description" character varying NOT NULL, "is_published" boolean NOT NULL, "userId" integer, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_user_comments" ("id" SERIAL NOT NULL, "comment" character varying NOT NULL, "carId" integer, "userId" integer, CONSTRAINT "PK_131f91a9a5acb1e2669ec28a4f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "car_images" ADD CONSTRAINT "FK_202539a18b3a1e8d6e25633f2e7" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_user_comments" ADD CONSTRAINT "FK_28122d1fde026fb550d016c6f42" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_user_comments" ADD CONSTRAINT "FK_88fe3c6d25d1a6c1a78817b2c98" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_user_comments" DROP CONSTRAINT "FK_88fe3c6d25d1a6c1a78817b2c98"`);
        await queryRunner.query(`ALTER TABLE "car_user_comments" DROP CONSTRAINT "FK_28122d1fde026fb550d016c6f42"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`ALTER TABLE "car_images" DROP CONSTRAINT "FK_202539a18b3a1e8d6e25633f2e7"`);
        await queryRunner.query(`DROP TABLE "car_user_comments"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "car_images"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_account_state_enum"`);
    }

}
