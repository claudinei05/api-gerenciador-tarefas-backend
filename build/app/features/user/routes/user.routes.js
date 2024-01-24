"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const create_user_validator_1 = require("../validatores/create-user-validator");
const login_validator_1 = require("../validatores/login.validator");
const tanks_routes_1 = require("../../tanks/routes/tanks.routes");
const userRoutes = () => {
    const app = (0, express_1.Router)();
    app.post("/createaccount", create_user_validator_1.CreateUserValidator.userValidate, new user_controller_1.userController().createUser);
    app.post("/login", login_validator_1.LoginUserValidator.loginValidator, new user_controller_1.userController().loginUser);
    app.use("/:userId/tanks", (0, tanks_routes_1.tanksRoutes)());
    return app;
};
exports.userRoutes = userRoutes;
