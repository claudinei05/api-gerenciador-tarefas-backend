import { v4 as createUuid } from "uuid";

export class TanksModel {
  private _id: string;
  constructor(private _description: string, private _detailing: string) {
    this._id = createUuid();
  }
  public get id() {
    return this._id;
  }

  public get description() {
    TanksModel;
    return this._description;
  }

  public set id(id: string) {
    this._id = id;
  }
  public set description(description: string) {
    this._description = description;
  }

  public get detailing() {
    return this._detailing;
  }
  public set detailing(detailing: string) {
    this._detailing = detailing;
  }
  public static create(id: string, description: string, detailing: string) {
    const tanks = new TanksModel(description, detailing);
    tanks.id = id;

    return tanks;
  }
  public toJson() {
    return {
      id: this._id,
      description: this._description,
      detailing: this._detailing,
    };
  }
}
