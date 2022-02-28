import {MigrationInterface, QueryRunner} from "typeorm";

export class modelInitial1646052583509 implements MigrationInterface {
    name = 'modelInitial1646052583509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipoentidad" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_7809edeffb52dfb91cc749ed44b" UNIQUE ("name"), CONSTRAINT "PK_40dfa3427fcf8b01b1449d55fe2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "entidad" ("id" int NOT NULL IDENTITY(1,1), "nit" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "db" nvarchar(255) NOT NULL, "capital" bit NOT NULL, "divipola" nvarchar(255) NOT NULL, "tipoentidad_id" int, "auth_id" int, "depart_id" int, "subsector_id" int, CONSTRAINT "UQ_87a64253a92f1e53e3fc8f26406" UNIQUE ("nit"), CONSTRAINT "UQ_eb2e6159a161c963b61caa4c998" UNIQUE ("divipola"), CONSTRAINT "PK_e8e966b92be9a461aed484bb30b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_1209862d213f4f8a4925c0cf0e" ON "entidad" ("auth_id") WHERE "auth_id" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_1326f0232d248e1b7bdf9a17828" FOREIGN KEY ("tipoentidad_id") REFERENCES "tipoentidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_1209862d213f4f8a4925c0cf0ee" FOREIGN KEY ("auth_id") REFERENCES "auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_8fdd2ffaa93f1fd72b4a0a3fc47" FOREIGN KEY ("depart_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_a2e8c72a9978069298a2c58d144" FOREIGN KEY ("subsector_id") REFERENCES "subsector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_a2e8c72a9978069298a2c58d144"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_8fdd2ffaa93f1fd72b4a0a3fc47"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_1209862d213f4f8a4925c0cf0ee"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_1326f0232d248e1b7bdf9a17828"`);
        await queryRunner.query(`DROP INDEX "REL_1209862d213f4f8a4925c0cf0e" ON "entidad"`);
        await queryRunner.query(`DROP TABLE "entidad"`);
        await queryRunner.query(`DROP TABLE "tipoentidad"`);
    }

}
