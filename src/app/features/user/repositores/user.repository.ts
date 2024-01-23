import { TypeormConnection } from "../../../../main/database/typeorm.connection";
import { UserModel } from "../../../models/user.models";
import { UserEntity } from "../../../shared/database/entities/user.entity";
import { TanksRepository } from "../../tanks/repositores/tanks-repository";

export class UserRepository {
  private repository = TypeormConnection.connection.getRepository(UserEntity);

  private mapEntityToModel(entity: UserEntity): UserModel {
    const tanksEntity = entity.tanks ?? [];
    const tanks = tanksEntity.map((item) =>
      TanksRepository.mapEntityToModel(item)
    );

    return UserModel.createModels(
      entity.id.trim(),
      entity.nome,
      entity.usuario,
      entity.senha,
      entity.confirmPassword,
      tanks
    );
  }
  public async createDatabase(user: UserModel) {
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

  public async getID(id: string) {
    const result = await this.repository.findOneBy({
      id,
    });

    if (result === null) {
      return null;
    }
    return this.mapEntityToModel(result);
  }

  public async login(user: string, password: string): Promise<any> {
    const result = await this.repository.findOne({
      where: {
        usuario: user,
        senha: password,
      },
    });

    return result;
  }
}
