import { TanksModel } from "../../../models/tanks.models";
import { TanksRepository } from "../repositores/tanks-repository";

interface UpdateTanksParams {
  tanksId: string;
  description: string;
  detailing: string;
}

export class UpdateTanksUsecase {
  public async execute(data: UpdateTanksParams) {
    const database = new TanksRepository();

    const result = await database.updateWithSave(
      data.tanksId,
      data.description,
      data.detailing
    );
    if (!result) {
      return {
        ok: false,
        message: " User not found(Usuario não encontrado)",
        code: 404,
      };
    }
    return {
      ok: true,
      data: result,
      message: "Tasks updated successfully (Tarefas atualizada com sucesso)",
      code: 201,
    };
  }
}
