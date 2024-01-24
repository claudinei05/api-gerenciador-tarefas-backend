"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tanksRoutes = void 0;
const express_1 = require("express");
const tanks_controllers_1 = require("../controllers/tanks.controllers");
const tanksRoutes = () => {
    const app = (0, express_1.Router)({ mergeParams: true });
    app.post("/", new tanks_controllers_1.TanksController().createTanks);
    app.get("/", new tanks_controllers_1.TanksController().listTanks);
    app.put("/:id", new tanks_controllers_1.TanksController().update);
    app.delete("/:id", new tanks_controllers_1.TanksController().delete);
    return app;
};
exports.tanksRoutes = tanksRoutes;
