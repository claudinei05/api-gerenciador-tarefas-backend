"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTanksUsecaseFactory = void 0;
const user_repository_1 = require("../../user/repositores/user.repository");
const tanks_repository_1 = require("../repositores/tanks-repository");
const create_tanks_usecase_1 = require("../usecase/create-tanks.usecase");
const createTanksUsecaseFactory = () => {
    const userDb = new user_repository_1.UserRepository();
    const database = new tanks_repository_1.TanksRepository();
    return new create_tanks_usecase_1.CreateTanksUsecase(userDb, database);
};
exports.createTanksUsecaseFactory = createTanksUsecaseFactory;
