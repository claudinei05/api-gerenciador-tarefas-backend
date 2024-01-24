"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTanksUsecase = void 0;
const user_repository_1 = require("../../user/repositores/user.repository");
const tanks_repository_1 = require("../repositores/tanks-repository");
class DeleteTanksUsecase {
    async execute(data) {
        const userRepository = new user_repository_1.UserRepository();
        const databaseUser = await userRepository.getID(data.idUser);
        const database = new tanks_repository_1.TanksRepository();
        if (!databaseUser) {
            return {
                ok: false,
                message: " User not found(Usuario não encontrado)",
                code: 404,
            };
        }
        const result = await database.delete(data.id);
        if (result === 0) {
            return {
                ok: false,
                message: " Tank not found(Tarefa não encontrado)",
                code: 404,
            };
        }
        return {
            ok: true,
            message: "Task deleted successfully (Tarefa excluído com sucesso)",
            code: 201,
        };
    }
}
exports.DeleteTanksUsecase = DeleteTanksUsecase;
