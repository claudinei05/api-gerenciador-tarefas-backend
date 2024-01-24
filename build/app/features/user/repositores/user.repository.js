"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const user_models_1 = require("../../../models/user.models");
const user_entity_1 = require("../../../shared/database/entities/user.entity");
const tanks_repository_1 = require("../../tanks/repositores/tanks-repository");
class UserRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(user_entity_1.UserEntity);
    mapEntityToModel(entity) {
        const tanksEntity = entity.tanks ?? [];
        const tanks = tanksEntity.map((item) => tanks_repository_1.TanksRepository.mapEntityToModel(item));
        return user_models_1.UserModel.createModels(entity.id.trim(), entity.nome, entity.usuario, entity.senha, entity.confirmPassword, tanks);
    }
    async createDatabase(user) {
        const userEntity = this.repository.create({
            id: user.id,
            nome: user.name,
            usuario: user.user,
            senha: user.password,
            confirmPassword: user.confirmPassword,
        });
        const result = await this.repository.save(userEntity);
        return this.mapEntityToModel(result).toJson();
    }
    async getID(id) {
        const result = await this.repository.findOneBy({
            id,
        });
        if (result === null) {
            return null;
        }
        return this.mapEntityToModel(result);
    }
    async login(user, password) {
        const result = await this.repository.findOne({
            where: {
                usuario: user,
                senha: password,
            },
        });
        return result;
    }
}
exports.UserRepository = UserRepository;
