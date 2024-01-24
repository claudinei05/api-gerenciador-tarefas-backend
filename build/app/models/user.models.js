"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const uuid_1 = require("uuid");
class UserModel {
    _name;
    _user;
    _password;
    _confirmPassword;
    _id;
    _tank;
    constructor(_name, _user, _password, _confirmPassword) {
        this._name = _name;
        this._user = _user;
        this._password = _password;
        this._confirmPassword = _confirmPassword;
        this._id = (0, uuid_1.v4)();
        this._tank = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get confirmPassword() {
        return this._confirmPassword;
    }
    set confirmPassword(confPassword) {
        this._confirmPassword = confPassword;
    }
    get tank() {
        return this._tank;
    }
    set tank(tank) {
        this._tank = tank;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            user: this._user,
            password: this._password,
            confirmPassword: this._confirmPassword,
            tank: this._tank,
        };
    }
    static createModels(id, name, user, password, confirmPassword, tank) {
        const users = new UserModel(name, user, password, confirmPassword);
        users._id = id;
        return users;
    }
}
exports.UserModel = UserModel;
