import { UserRepository } from "../../user/repositores/user.repository";
import { TanksRepository } from "../repositores/tanks-repository";
import { CreateTanksUsecase } from "../usecase/create-tanks.usecase";

export const createTanksUsecaseFactory = () => {
  const userDb = new UserRepository();
  const database = new TanksRepository();
  return new CreateTanksUsecase(userDb, database);
};
