"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTanksUsecase = void 0;
const user_repository_1 = require("../../user/repositores/user.repository");
const tanks_repository_1 = require("../repositores/tanks-repository");
class ListTanksUsecase {
    async execute(data) {
        const database = new tanks_repository_1.TanksRepository();
        const result = await database.list(data.userId);
        const databaseUser = new user_repository_1.UserRepository();
        const validUser = await databaseUser.getID(data.userId);
        if (!validUser) {
            return {
                ok: false,
                message: "User not found (Usuário não encontrado)",
                code: 404,
            };
        }
        return {
            ok: true,
            message: "Tanks listed successfully (Taefas listados com sucesso)",
            code: 200,
            data: result,
        };
    }
}
exports.ListTanksUsecase = ListTanksUsecase;
