"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserValidator = void 0;
const user_repository_1 = require("../repositores/user.repository");
class LoginUserValidator {
    static async loginValidator(req, res, next) {
        try {
            const { user, password } = req.body;
            const database = new user_repository_1.UserRepository();
            const result = await database.login(user, password);
            if (!result) {
                return res.status(401).send({
                    ok: false,
                    message: "Invalid credentials (Credenciais inválidas)",
                });
            }
            next();
        }
        catch (error) {
            return res.status(500).send({
                ok: false,
                message: "Internal Serve Error",
            });
        }
    }
}
exports.LoginUserValidator = LoginUserValidator;
