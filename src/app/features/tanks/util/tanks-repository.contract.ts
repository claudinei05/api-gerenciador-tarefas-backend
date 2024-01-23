import { TanksModel } from "../../../models/tanks.models";

export interface TanksRepositoryContract {
  create: (id: string, tank: TanksModel) => Promise<TanksModel>;
}
