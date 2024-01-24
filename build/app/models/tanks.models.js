"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanksModel = void 0;
const uuid_1 = require("uuid");
class TanksModel {
    _description;
    _detailing;
    _id;
    constructor(_description, _detailing) {
        this._description = _description;
        this._detailing = _detailing;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    get description() {
        TanksModel;
        return this._description;
    }
    set id(id) {
        this._id = id;
    }
    set description(description) {
        this._description = description;
    }
    get detailing() {
        return this._detailing;
    }
    set detailing(detailing) {
        this._detailing = detailing;
    }
    static create(id, description, detailing) {
        const tanks = new TanksModel(description, detailing);
        tanks.id = id;
        return tanks;
    }
    toJson() {
        return {
            id: this._id,
            description: this._description,
            detailing: this._detailing,
        };
    }
}
exports.TanksModel = TanksModel;
