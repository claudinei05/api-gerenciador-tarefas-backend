import { UserRepository } from "../repositores/user.repository";

interface loginUserParams {
  user: string;
  password: string;
}

export class LoginUserUsecase {
  public async execute(data: loginUserParams) {
    const database = new UserRepository();

    const result = await database.login(data.user, data.password);

    return {
      ok: true,
      data: result,
      message: "Login successfully done (Login feito com sucesso)",
      code: 200,
    };
  }
}
