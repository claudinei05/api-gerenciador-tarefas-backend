"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const database_env_1 = require("../../app/envs/database.env");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    host: database_env_1.databaseEnv.host,
    username: database_env_1.databaseEnv.username,
    password: database_env_1.databaseEnv.password,
    database: database_env_1.databaseEnv.database,
    schema: "gerenciadortarefas",
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: ["src/app/shared/database/entities/**/*.ts"],
    migrations: ["src/app/shared/database/migrations/**/*.ts"],
});
