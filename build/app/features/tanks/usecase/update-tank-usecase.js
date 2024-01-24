"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTanksUsecase = void 0;
const tanks_repository_1 = require("../repositores/tanks-repository");
class UpdateTanksUsecase {
    async execute(data) {
        const database = new tanks_repository_1.TanksRepository();
        const result = await database.updateWithSave(data.tanksId, data.description, data.detailing);
        if (!result) {
            return {
                ok: false,
                message: " User not found(Usuario não encontrado)",
                code: 404,
            };
        }
        return {
            ok: true,
            data: result,
            message: "Tasks updated successfully (Tarefas atualizada com sucesso)",
            code: 201,
        };
    }
}
exports.UpdateTanksUsecase = UpdateTanksUsecase;
