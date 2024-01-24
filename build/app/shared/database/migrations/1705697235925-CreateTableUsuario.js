"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsuario1705697235925 = void 0;
class CreateTableUsuario1705697235925 {
    name = 'CreateTableUsuario1705697235925';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "gerenciadortarefas"."tanks" ("id_message" character varying NOT NULL, "description" character varying(50) NOT NULL, "detailing" character varying(50) NOT NULL, "id_user" character varying NOT NULL, "dthr_Criacao" TIMESTAMP NOT NULL, "dthr_Atualizacao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_77ff0e80cc8425f85766220d071" PRIMARY KEY ("id_message"))`);
        await queryRunner.query(`CREATE TABLE "gerenciadortarefas"."users" ("id" character varying NOT NULL, "nome" character varying(50) NOT NULL, "usuario" character varying NOT NULL, "senha" character varying(10) NOT NULL, "confirm_password" character varying(10) NOT NULL, "dthr_criacao" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f06f84f3f2bc0696d00882fcfa9" UNIQUE ("usuario"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "gerenciadortarefas"."tanks" ADD CONSTRAINT "FK_fed5b34ddd6643f0b93cdf8ddbc" FOREIGN KEY ("id_user") REFERENCES "gerenciadortarefas"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "gerenciadortarefas"."tanks" DROP CONSTRAINT "FK_fed5b34ddd6643f0b93cdf8ddbc"`);
        await queryRunner.query(`DROP TABLE "gerenciadortarefas"."users"`);
        await queryRunner.query(`DROP TABLE "gerenciadortarefas"."tanks"`);
    }
}
exports.CreateTableUsuario1705697235925 = CreateTableUsuario1705697235925;
