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
    // if (
    //   data.name === "" ||
    //   data.user === "" ||
    //   data.password === "" ||
    //   data.confirmPassword === ""
    // ) {
    //   return {
    //     ok: false,
    //     message: "Fill in the fields (preencha os campos)",
    //     code: 400,
    //   };
    // }
    // if (data.password.length < 5 || data.confirmPassword.length < 5) {
    //   return {
    //     ok: false,
    //     message:
    //       "Password needs at least 5 characters (A senha precisa de pelo menos 5 caracteres)",
    //     code: 404,
    //   };
    // }
    // if (data.user.length < 5) {
    //   return {
    //     ok: false,
    //     message:
    //       "The user needs at least 5 characters (O usuário precisa de pelo menos 5 caracteres)",
    //     code: 404,
    //   };
    // }
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
