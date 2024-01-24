"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanksController = void 0;
const create_tanks_usecase_factory_1 = require("../util/create-tanks-usecase.factory");
const update_tank_usecase_1 = require("../usecase/update-tank-usecase");
const deletar_tanks_usecase_1 = require("../usecase/deletar-tanks.usecase");
const list_tanks_usecase_1 = require("../usecase/list-tanks.usecase");
class TanksController {
    async createTanks(req, res) {
        try {
            const { userId } = req.params;
            let { description, detailing } = req.body;
            const usecase = (0, create_tanks_usecase_factory_1.createTanksUsecaseFactory)();
            const result = await usecase.execute({ userId, description, detailing });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString("Internal Serve Error"),
            });
        }
    }
    async update(req, res) {
        try {
            const { tanksId } = req.params;
            const { description, detailing } = req.body;
            const usecase = new update_tank_usecase_1.UpdateTanksUsecase();
            const result = await usecase.execute({
                tanksId,
                description,
                detailing,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString("Internal Serve Error"),
            });
        }
    }
    async delete(req, res) {
        try {
            const { id, idUser } = req.params;
            const usecase = new deletar_tanks_usecase_1.DeleteTanksUsecase();
            const result = await usecase.execute({
                id,
                idUser,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString("Internal Serve Error"),
            });
        }
    }
    async listTanks(req, res) {
        try {
            const { userId } = req.params;
            const usecase = new list_tanks_usecase_1.ListTanksUsecase();
            const result = await usecase.execute({
                userId,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            });
        }
    }
}
exports.TanksController = TanksController;
