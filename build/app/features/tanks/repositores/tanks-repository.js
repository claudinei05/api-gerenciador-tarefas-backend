"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanksRepository = void 0;
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const tanks_models_1 = require("../../../models/tanks.models");
const tanks_entity_1 = require("../../../shared/database/entities/tanks.entity");
class TanksRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(tanks_entity_1.TanksEntity);
    async list(id) {
        const result = await this.repository.find({
            where: {
                user: {
                    id: id,
                },
            },
        });
        return result.map((item) => TanksRepository.mapEntityToModel(item).toJson());
    }
    async create(id, tank) {
        const tanksEntity = this.repository.create({
            id: tank.id,
            description: tank.description,
            detailing: tank.detailing,
            idUser: id,
            dthrCriacao: new Date(),
        });
        const result = await this.repository.save(tanksEntity);
        return TanksRepository.mapEntityToModel(result);
    }
    async delete(id) {
        const result = await this.repository.delete({
            id,
        });
        return result.affected ?? 0;
    }
    async updateWithSave(id, description, detailing) {
        const tanksEntity = await this.repository.findOneBy({
            id,
        });
        if (!tanksEntity) {
            return 0;
        }
        tanksEntity.description = description;
        tanksEntity.detailing = detailing;
        await this.repository.save(tanksEntity);
        return 1;
    }
    static mapEntityToModel(entity) {
        return tanks_models_1.TanksModel.create(entity.id, entity.description, entity.detailing);
    }
}
exports.TanksRepository = TanksRepository;
