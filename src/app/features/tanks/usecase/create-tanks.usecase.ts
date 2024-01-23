import { TanksModel } from "../../../models/tanks.models";
import { GetUserRepositoryContract } from "../../user/util/user-repository.contract";
import { TanksRepositoryContract } from "../util/tanks-repository.contract";

interface CreateTanksParams {
  userId: string;
  description: string;
  detailing: string;
}

export class CreateTanksUsecase {
  constructor(
    private userDatabase: GetUserRepositoryContract,
    private tanksDatabase: TanksRepositoryContract
  ) {}

  public async execute(data: CreateTanksParams) {
    const resultUser = await this.userDatabase.getID(data.userId);
    if (data.description === "" && data.detailing === "") {
      return {
        ok: false,
        massage: " Description or detail was not provided",
        code: 400,
      };
    }
    if (data.description.length < 3 && data.detailing.length < 5) {
      return {
        ok: false,
        massage:
          " Minimum number of characters not provided (description=4, detail=6)",
        code: 400,
      };
    }
    if (!resultUser) {
      return {
        ok: false,
        message: " User not found(Usuario não encontrado)",
        code: 404,
      };
    }

    const result = await this.tanksDatabase.create(
      data.userId,
      new TanksModel(data.description, data.detailing)
    );
    return {
      ok: true,
      data: result,
      message: "Tanks success created (Tarefa criada com sucesso)",
      code: 201,
    };
  }
}
