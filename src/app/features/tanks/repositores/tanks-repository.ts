import { TypeormConnection } from "../../../../main/database/typeorm.connection";
import { TanksModel } from "../../../models/tanks.models";
import { TanksEntity } from "../../../shared/database/entities/tanks.entity";
import { TanksRepositoryContract } from "../util/tanks-repository.contract";

export class TanksRepository implements TanksRepositoryContract {
  private repository = TypeormConnection.connection.getRepository(TanksEntity);

  public async list(id: string) {
    const result = await this.repository.find({
      where: {
        user: {
          id: id,
        },
      },
    });

    return result.map((item) =>
      TanksRepository.mapEntityToModel(item).toJson()
    );
  }
  public async create(id: string, tank: TanksModel) {
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

  public async delete(id: string): Promise<number> {
    const result = await this.repository.delete({
      id,
    });

    return result.affected ?? 0;
  }

  public async updateWithSave(
    id: string,
    description: string,
    detailing: string
  ): Promise<number> {
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

  static mapEntityToModel(entity: TanksEntity): TanksModel {
    return TanksModel.create(entity.id, entity.description, entity.detailing);
  }
}
