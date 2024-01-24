"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCase = void 0;
const user_models_1 = require("../../../models/user.models");
const user_repository_1 = require("../repositores/user.repository");
class CreateUserCase {
    async execute(data) {
        const newUser = new user_models_1.UserModel(data.name, data.user, data.password, data.confirmPassword);
        const database = new user_repository_1.UserRepository();
        const result = await database.createDatabase(newUser);
        return {
            ok: true,
            data: result,
            message: "User was successfully created",
            code: 201,
        };
    }
}
exports.CreateUserCase = CreateUserCase;
