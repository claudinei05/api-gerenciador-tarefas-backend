import { UserRepository } from "../../user/repositores/user.repository";
import { TanksRepository } from "../repositores/tanks-repository";

interface DeleteTanksParams {
  id: string;
  idUser: string;
}

export class DeleteTanksUsecase {
  public async execute(data: DeleteTanksParams) {
    const userRepository = new UserRepository();
    const databaseUser = await userRepository.getID(data.idUser);
    const database = new TanksRepository();

    if (!databaseUser) {
      return {
        ok: false,
        message: " User not found(Usuario não encontrado)",
        code: 404,
      };
    }
    const result = await database.delete(data.id);
    if (result === 0) {
      return {
        ok: false,
        message: " Tank not found(Tarefa não encontrado)",
        code: 404,
      };
    }
    return {
      ok: true,
      message: "Task deleted successfully (Tarefa excluído com sucesso)",
      code: 201,
    };
  }
}
