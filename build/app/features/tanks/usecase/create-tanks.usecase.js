"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTanksUsecase = void 0;
const tanks_models_1 = require("../../../models/tanks.models");
class CreateTanksUsecase {
    userDatabase;
    tanksDatabase;
    constructor(userDatabase, tanksDatabase) {
        this.userDatabase = userDatabase;
        this.tanksDatabase = tanksDatabase;
    }
    async execute(data) {
        const resultUser = await this.userDatabase.getID(data.userId);
        if (data.description === "" && data.detailing === "") {
            return {
                ok: false,
                massage: " Description or detail was not provided",
                code: 400,
            };
        }
        if (data.description.length < 3 && data.detailing.length < 5) {
            return {
                ok: false,
                massage: " Minimum number of characters not provided (description=4, detail=6)",
                code: 400,
            };
        }
        if (!resultUser) {
            return {
                ok: false,
                message: " User not found(Usuario não encontrado)",
                code: 404,
            };
        }
        const result = await this.tanksDatabase.create(data.userId, new tanks_models_1.TanksModel(data.description, data.detailing));
        return {
            ok: true,
            data: result,
            message: "Tanks success created (Tarefa criada com sucesso)",
            code: 201,
        };
    }
}
exports.CreateTanksUsecase = CreateTanksUsecase;
