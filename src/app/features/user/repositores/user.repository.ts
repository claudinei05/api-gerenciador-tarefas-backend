import { TypeormConnection } from "../../../../main/database/typeorm.connection";
import { UserModel } from "../../../models/user.models";
import { UserEntity } from "../../../shared/database/entities/user.entity";

export class UserRepository {
  private repository = TypeormConnection.connection.getRepository(UserEntity);

  private mapEntityModel(entity: UserEntity): UserModel {
    const tanksEntity = entity.tanks ?? [];
    const tanks = tanksEntity.map((item) =>
      // .mapEntityToModel(item)
      console.log("aguardando")
    );

    return UserModel.createModels(
      entity.id.trim(),
      entity.nome,
      entity.usuario,
      entity.senha,
      entity.confirmPassword
      // tanks
    );
  }
  public async createDatabase(user: UserModel) {
    const userEntity = this.repository.create({
      id: user.id,
      nome: user.name,
      usuario: user.user,
      senha: user.password,
      confirmPassword: user.confirmPassword,
      // dthrCriacao: new Date(),
    });

    const result = await this.repository.save(userEntity);
    return result;
    //return this.mapEntityToModel(result).toJson();
  }
}
