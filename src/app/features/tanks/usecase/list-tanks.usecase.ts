import { UserRepository } from "../../user/repositores/user.repository";
import { TanksRepository } from "../repositores/tanks-repository";

interface ListTanksParams {
  userId: string;
}

export class ListTanksUsecase {
  public async execute(data: ListTanksParams) {
    const database = new TanksRepository();
    const result = await database.list(data.userId);

    const databaseUser = new UserRepository();
    const validUser = await databaseUser.getID(data.userId);

    if (!validUser) {
      return {
        ok: false,
        message: "User not found (Usuário não encontrado)",
        code: 404,
      };
    }

    return {
      ok: true,
      message: "Tanks listed successfully (Taefas listados com sucesso)",
      code: 200,
      data: result,
    };
  }
}
