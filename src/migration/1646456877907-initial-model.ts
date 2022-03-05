import {MigrationInterface, QueryRunner} from "typeorm";

export class initialModel1646456877907 implements MigrationInterface {
    name = 'initialModel1646456877907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "satelital" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "active" bit NOT NULL, CONSTRAINT "UQ_7788538745df0ec1c4b899c6f97" UNIQUE ("name"), CONSTRAINT "PK_e15f3aff24213f204f25ec06ea7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipoentidad" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_7809edeffb52dfb91cc749ed44b" UNIQUE ("name"), CONSTRAINT "PK_40dfa3427fcf8b01b1449d55fe2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sector" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "initials" nvarchar(255) NOT NULL, CONSTRAINT "UQ_23e1125a0a0e6b06d3e825ba990" UNIQUE ("name"), CONSTRAINT "UQ_9ef0978c11fbc29b639ec762958" UNIQUE ("initials"), CONSTRAINT "PK_668b2ea8a2f534425407732f3ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subsector" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "sector_id" int, CONSTRAINT "PK_4794e38ae081bb0fad21493b4ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "email" ("id" int NOT NULL IDENTITY(1,1), "email" nvarchar(255) NOT NULL, "entidad_id" int NOT NULL, CONSTRAINT "UQ_fee9013b697946e8129caba8983" UNIQUE ("email"), CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "telefono" ("id" int NOT NULL IDENTITY(1,1), "numero" nvarchar(255) NOT NULL, "contacto" nvarchar(255), "cargo" nvarchar(255), "entidad_id" int NOT NULL, CONSTRAINT "UQ_3c5d11e0890dc44ab81868640eb" UNIQUE ("numero"), CONSTRAINT "PK_58f2dfd7044b4f5e50a1827c756" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "entidad" ("id" int NOT NULL IDENTITY(1,1), "nit" int NOT NULL, "name" nvarchar(255) NOT NULL, "db" nvarchar(255) NOT NULL, "capital" bit NOT NULL, "cgn" nvarchar(255), "divipola" nvarchar(255), "categoria" int, "tipoentidad_id" int, "auth_id" int, "depart_id" int NOT NULL, "subsector_id" int NOT NULL, CONSTRAINT "UQ_87a64253a92f1e53e3fc8f26406" UNIQUE ("nit"), CONSTRAINT "UQ_921b266a636389a98e6db5f5e8a" UNIQUE ("cgn"), CONSTRAINT "UQ_eb2e6159a161c963b61caa4c998" UNIQUE ("divipola"), CONSTRAINT "PK_e8e966b92be9a461aed484bb30b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_1209862d213f4f8a4925c0cf0e" ON "entidad" ("auth_id") WHERE "auth_id" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "department" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "latitude" decimal(9,6) NOT NULL CONSTRAINT "DF_59f2fcb2a5856de96806c2a586e" DEFAULT 0, "longitude" decimal(9,6) NOT NULL CONSTRAINT "DF_8f4be4aa8e951390a2a538713ae" DEFAULT 0, "active" bit NOT NULL, "satelital_id" int, "user_id" int, CONSTRAINT "UQ_471da4b90e96c1ebe0af221e07b" UNIQUE ("name"), CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "image" nvarchar(255), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1a78a77b4270b177ab1b9a4ff4" ON "user" ("image") WHERE image IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "auth" ("id" int NOT NULL IDENTITY(1,1), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "role" ntext NOT NULL CONSTRAINT "DF_7398d6556b440ff388503c5885d" DEFAULT '', "user_id" int, CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_9922406dc7d70e20423aeffadf" ON "auth" ("user_id") WHERE "user_id" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "modelo" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_0565e8bd88e334a89d41538b4d8" UNIQUE ("name"), CONSTRAINT "PK_4d5d3a7d7efe7e5f03944aa15d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reporte" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "categoria_id" int, CONSTRAINT "UQ_d89c6935b81afd2d15992e27825" UNIQUE ("name"), CONSTRAINT "PK_8ff73251b8d9b8c8c6acf1deb46" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "modelo_id" int, CONSTRAINT "UQ_9945c4fc84463a0c5a1a5651a83" UNIQUE ("name"), CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vigencia" ("id" int NOT NULL IDENTITY(1,1), "name" int NOT NULL, CONSTRAINT "UQ_7adb92ee11e966aeeff226abb29" UNIQUE ("name"), CONSTRAINT "PK_1c8a4f959d6653320e43384ac55" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "requerimiento" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "UQ_b33fce286e9aa0b69a0421a53ae" UNIQUE ("name"), CONSTRAINT "PK_ec9600229db3470c4adf337ab99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estructuracion" ("id" int NOT NULL IDENTITY(1,1), "file" nvarchar(255) NOT NULL, "peso" nvarchar(255) NOT NULL, "conExito" bit NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_6154f1c88d502ee17da3d030f54" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c98d8a2e061aa3e8db6c4e3ff26" DEFAULT getdate(), "report_id" int, "entidad_id" int, "user_id" int, "vigencia_id" int, "requerimiento_id" int, CONSTRAINT "PK_c96c1d0f2c3c185a865f75189e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ejecucioningreso" ("id" int NOT NULL IDENTITY(1,1), "anio_reporte" int NOT NULL, "vigencia" nvarchar(255) NOT NULL, "nit_entidad_reportante" int NOT NULL, "nombre_entidad_reportante" nvarchar(255) NOT NULL, "codigo_presupuestal" nvarchar(255) NOT NULL, "macro_campo_nivel_agregado" nvarchar(255) NOT NULL, "nombre_rubro" nvarchar(255) NOT NULL, "presupuesto_inicial" int NOT NULL, "adiciones_del_periodo" int NOT NULL, "adiciones_acumuladas" int NOT NULL, "reducciones_del_periodo" int NOT NULL, "reducciones_acumuladas" int NOT NULL, "apropiacion_definitiva" int NOT NULL, "reconocimientos_del_periodo" int NOT NULL, "reconocimientos_acumulados" int NOT NULL, "recaudos_del_periodo" int NOT NULL, "recaudos_acumulados" int NOT NULL, "fecha_reporte" datetime NOT NULL, "estructura_id" int, CONSTRAINT "PK_78f5b64831631350e91e82e7b45" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e483b55928b8208e6cd79701a6" ON "ejecucioningreso" ("estructura_id") WHERE "estructura_id" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "errorlog" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_59a015183866939216b96e63fd4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sigedoc" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "image" nvarchar(255), CONSTRAINT "UQ_5992cee53fca6cb902a520b7927" UNIQUE ("name"), CONSTRAINT "PK_4256dc97d953aaf0a20416330bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "relacioningreso" ("id" int NOT NULL IDENTITY(1,1), "anio_reporte" int NOT NULL, "vigencia" nvarchar(255) NOT NULL, "nit_entidad_reportante" int NOT NULL, "nombre_entidad_reportante" nvarchar(255) NOT NULL, "codigo_presupuestal" nvarchar(255) NOT NULL, "macro_campo_nivel_agregado" nvarchar(255) NOT NULL, "fecha_de_recaudo" datetime NOT NULL, "numero_recibo" nvarchar(255) NOT NULL, "numero_reconocimiento" int NOT NULL, "numero_identificacion_tercero" int NOT NULL, "nombre_tercero" nvarchar(255) NOT NULL, "concepto_recaudo" nvarchar(255) NOT NULL, "valor" int NOT NULL, "cuenta_bancaria_dest" int NOT NULL, "nombre_banco" nvarchar(255) NOT NULL, "no_cuenta_banco_orig" int NOT NULL, "cta_contable" nvarchar(255) NOT NULL, "estructura_id" int, CONSTRAINT "PK_19be36b649cf69446a0f8c2e412" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_eba781ecad8bd84bbee70dff20" ON "relacioningreso" ("estructura_id") WHERE "estructura_id" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subsector" ADD CONSTRAINT "FK_5938a3230836df6605ed4aef1ed" FOREIGN KEY ("sector_id") REFERENCES "sector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_2db6bade8788da5fd17069c36ce" FOREIGN KEY ("entidad_id") REFERENCES "entidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "telefono" ADD CONSTRAINT "FK_3d5eac338d344c315a4928329f4" FOREIGN KEY ("entidad_id") REFERENCES "entidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_1326f0232d248e1b7bdf9a17828" FOREIGN KEY ("tipoentidad_id") REFERENCES "tipoentidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_1209862d213f4f8a4925c0cf0ee" FOREIGN KEY ("auth_id") REFERENCES "auth"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_8fdd2ffaa93f1fd72b4a0a3fc47" FOREIGN KEY ("depart_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entidad" ADD CONSTRAINT "FK_a2e8c72a9978069298a2c58d144" FOREIGN KEY ("subsector_id") REFERENCES "subsector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_08bc68eceaa52c77301c52bb9b9" FOREIGN KEY ("satelital_id") REFERENCES "satelital"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_9104d98173511557613e7ef99be" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_9922406dc7d70e20423aeffadf3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reporte" ADD CONSTRAINT "FK_475ea023c9dbc7e8c2a5551577b" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD CONSTRAINT "FK_1bb033fef63c9ca0cd7626cc7ae" FOREIGN KEY ("modelo_id") REFERENCES "modelo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estructuracion" ADD CONSTRAINT "FK_a7927965aa64bf546d3688ab3f7" FOREIGN KEY ("report_id") REFERENCES "reporte"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estructuracion" ADD CONSTRAINT "FK_fc0da65424c586741db02fe6af5" FOREIGN KEY ("entidad_id") REFERENCES "entidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estructuracion" ADD CONSTRAINT "FK_bb01ce199949b0e74652f8b321c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estructuracion" ADD CONSTRAINT "FK_7a00470c2629aff76b30cc8b0ca" FOREIGN KEY ("vigencia_id") REFERENCES "vigencia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estructuracion" ADD CONSTRAINT "FK_b08c1eeecb79ee5fd29854fa0e7" FOREIGN KEY ("requerimiento_id") REFERENCES "requerimiento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ejecucioningreso" ADD CONSTRAINT "FK_e483b55928b8208e6cd79701a6b" FOREIGN KEY ("estructura_id") REFERENCES "estructuracion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relacioningreso" ADD CONSTRAINT "FK_eba781ecad8bd84bbee70dff208" FOREIGN KEY ("estructura_id") REFERENCES "estructuracion"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relacioningreso" DROP CONSTRAINT "FK_eba781ecad8bd84bbee70dff208"`);
        await queryRunner.query(`ALTER TABLE "ejecucioningreso" DROP CONSTRAINT "FK_e483b55928b8208e6cd79701a6b"`);
        await queryRunner.query(`ALTER TABLE "estructuracion" DROP CONSTRAINT "FK_b08c1eeecb79ee5fd29854fa0e7"`);
        await queryRunner.query(`ALTER TABLE "estructuracion" DROP CONSTRAINT "FK_7a00470c2629aff76b30cc8b0ca"`);
        await queryRunner.query(`ALTER TABLE "estructuracion" DROP CONSTRAINT "FK_bb01ce199949b0e74652f8b321c"`);
        await queryRunner.query(`ALTER TABLE "estructuracion" DROP CONSTRAINT "FK_fc0da65424c586741db02fe6af5"`);
        await queryRunner.query(`ALTER TABLE "estructuracion" DROP CONSTRAINT "FK_a7927965aa64bf546d3688ab3f7"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP CONSTRAINT "FK_1bb033fef63c9ca0cd7626cc7ae"`);
        await queryRunner.query(`ALTER TABLE "reporte" DROP CONSTRAINT "FK_475ea023c9dbc7e8c2a5551577b"`);
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_9922406dc7d70e20423aeffadf3"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_9104d98173511557613e7ef99be"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_08bc68eceaa52c77301c52bb9b9"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_a2e8c72a9978069298a2c58d144"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_8fdd2ffaa93f1fd72b4a0a3fc47"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_1209862d213f4f8a4925c0cf0ee"`);
        await queryRunner.query(`ALTER TABLE "entidad" DROP CONSTRAINT "FK_1326f0232d248e1b7bdf9a17828"`);
        await queryRunner.query(`ALTER TABLE "telefono" DROP CONSTRAINT "FK_3d5eac338d344c315a4928329f4"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_2db6bade8788da5fd17069c36ce"`);
        await queryRunner.query(`ALTER TABLE "subsector" DROP CONSTRAINT "FK_5938a3230836df6605ed4aef1ed"`);
        await queryRunner.query(`DROP INDEX "REL_eba781ecad8bd84bbee70dff20" ON "relacioningreso"`);
        await queryRunner.query(`DROP TABLE "relacioningreso"`);
        await queryRunner.query(`DROP TABLE "sigedoc"`);
        await queryRunner.query(`DROP TABLE "errorlog"`);
        await queryRunner.query(`DROP INDEX "REL_e483b55928b8208e6cd79701a6" ON "ejecucioningreso"`);
        await queryRunner.query(`DROP TABLE "ejecucioningreso"`);
        await queryRunner.query(`DROP TABLE "estructuracion"`);
        await queryRunner.query(`DROP TABLE "requerimiento"`);
        await queryRunner.query(`DROP TABLE "vigencia"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "reporte"`);
        await queryRunner.query(`DROP TABLE "modelo"`);
        await queryRunner.query(`DROP INDEX "REL_9922406dc7d70e20423aeffadf" ON "auth"`);
        await queryRunner.query(`DROP TABLE "auth"`);
        await queryRunner.query(`DROP INDEX "IDX_1a78a77b4270b177ab1b9a4ff4" ON "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP INDEX "REL_1209862d213f4f8a4925c0cf0e" ON "entidad"`);
        await queryRunner.query(`DROP TABLE "entidad"`);
        await queryRunner.query(`DROP TABLE "telefono"`);
        await queryRunner.query(`DROP TABLE "email"`);
        await queryRunner.query(`DROP TABLE "subsector"`);
        await queryRunner.query(`DROP TABLE "sector"`);
        await queryRunner.query(`DROP TABLE "tipoentidad"`);
        await queryRunner.query(`DROP TABLE "satelital"`);
    }

}
