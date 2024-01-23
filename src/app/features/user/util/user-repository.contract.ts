import { UserModel } from "../../../models/user.models";

export interface GetUserRepositoryContract {
  getID: (id: string) => Promise<UserModel | null>;
}
