import {MigrationInterface, QueryRunner} from "typeorm";

export class modeloInicial1645896339683 implements MigrationInterface {
    name = 'modeloInicial1645896339683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "satelital" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "active" bit NOT NULL, CONSTRAINT "UQ_7788538745df0ec1c4b899c6f97" UNIQUE ("name"), CONSTRAINT "PK_e15f3aff24213f204f25ec06ea7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "latitude" decimal(9,6) NOT NULL CONSTRAINT "DF_59f2fcb2a5856de96806c2a586e" DEFAULT 0, "longitude" decimal(9,6) NOT NULL CONSTRAINT "DF_8f4be4aa8e951390a2a538713ae" DEFAULT 0, "active" bit NOT NULL, "satelital_id" int, "user_id" int, CONSTRAINT "UQ_471da4b90e96c1ebe0af221e07b" UNIQUE ("name"), CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "image" nvarchar(255), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_1a78a77b4270b177ab1b9a4ff4" ON "user" ("image") WHERE image IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "auth" ("id" int NOT NULL IDENTITY(1,1), "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "role" ntext NOT NULL CONSTRAINT "DF_7398d6556b440ff388503c5885d" DEFAULT '', "user_id" int, CONSTRAINT "UQ_366ebf23d8f3781bb7bb37abbd1" UNIQUE ("username"), CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_9922406dc7d70e20423aeffadf" ON "auth" ("user_id") WHERE "user_id" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "sector" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "initials" nvarchar(255) NOT NULL, CONSTRAINT "UQ_23e1125a0a0e6b06d3e825ba990" UNIQUE ("name"), CONSTRAINT "UQ_9ef0978c11fbc29b639ec762958" UNIQUE ("initials"), CONSTRAINT "PK_668b2ea8a2f534425407732f3ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_08bc68eceaa52c77301c52bb9b9" FOREIGN KEY ("satelital_id") REFERENCES "satelital"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_9104d98173511557613e7ef99be" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_9922406dc7d70e20423aeffadf3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_9922406dc7d70e20423aeffadf3"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_9104d98173511557613e7ef99be"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_08bc68eceaa52c77301c52bb9b9"`);
        await queryRunner.query(`DROP TABLE "sector"`);
        await queryRunner.query(`DROP INDEX "REL_9922406dc7d70e20423aeffadf" ON "auth"`);
        await queryRunner.query(`DROP TABLE "auth"`);
        await queryRunner.query(`DROP INDEX "IDX_1a78a77b4270b177ab1b9a4ff4" ON "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "satelital"`);
    }

}
