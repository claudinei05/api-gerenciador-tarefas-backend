"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUsecase = void 0;
const user_repository_1 = require("../repositores/user.repository");
class LoginUserUsecase {
    async execute(data) {
        const database = new user_repository_1.UserRepository();
        const result = await database.login(data.user, data.password);
        return {
            ok: true,
            data: result,
            message: "Login successfully done (Login feito com sucesso)",
            code: 200,
        };
    }
}
exports.LoginUserUsecase = LoginUserUsecase;
