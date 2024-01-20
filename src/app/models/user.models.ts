import { v4 as createUuid } from "uuid";
import { TanksModel } from "./tanks.models";
// import { UserEntity } from "../shared/database/entities/user.entity";

export class UserModel {
  private _id: string;
  private _tank: TanksModel[];
  constructor(
    private _name: string,
    private _user: string,
    private _password: string,
    private _confirmPassword: string
  ) {
    this._id = createUuid();
    this._tank = [];
  }
  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }
  public set name(name: string) {
    this._name = name;
  }
  public get user() {
    return this._user;
  }
  public set user(user: string) {
    this._user = user;
  }
  public get password() {
    return this._password;
  }
  public set password(password: string) {
    this._password = password;
  }
  public get confirmPassword() {
    return this._confirmPassword;
  }
  public set confirmPassword(confPassword: string) {
    this._confirmPassword = confPassword;
  }
  public get tank() {
    return this._tank;
  }
  public set tank(tank: TanksModel[]) {
    this._tank = tank;
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      user: this._user,
      password: this._password,
      confirmPassword: this._confirmPassword,
      // tank: this._tank,
    };
  }

  public static createModels(
    id: string,
    name: string,
    user: string,
    password: string,
    confirmPassword: string,
    tank?: TanksModel[]
  ) {
    const users = new UserModel(name, user, password, confirmPassword);
    users._id = id;
    return users;
  }
}
