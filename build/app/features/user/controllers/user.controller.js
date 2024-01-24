"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const create_user_usecase_1 = require("../usecase/create-user.usecase");
const login_user_usecase_1 = require("../usecase/login-user.usecase");
class userController {
    async createUser(req, res) {
        try {
            const { name, user, password, confirmPassword } = req.body;
            const usecase = new create_user_usecase_1.CreateUserCase();
            const result = await usecase.execute({
                name,
                user,
                password,
                confirmPassword,
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
    async loginUser(req, res) {
        try {
            const { user, password } = req.body;
            const usecase = new login_user_usecase_1.LoginUserUsecase();
            const result = await usecase.execute({
                user,
                password,
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
}
exports.userController = userController;
