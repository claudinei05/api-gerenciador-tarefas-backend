import { UserModel } from "../../../models/user.models";
import { UserRepository } from "../repositores/user.repository";

interface CreateUserParams {
  name: string;
  user: string;
  password: string;
  confirmPassword: string;
}
export class CreateUserCase {
  public async execute(data: CreateUserParams) {
    const newUser = new UserModel(
      data.name,
      data.user,
      data.password,
      data.confirmPassword
    );

    const database = new UserRepository();

    const result = await database.createDatabase(newUser);
    return {
      ok: true,
      data: result,
      message: "User was successfully created",
      code: 201,
    };
  }
}
