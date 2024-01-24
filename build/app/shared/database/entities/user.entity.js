"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const tanks_entity_1 = require("./tanks.entity");
let UserEntity = class UserEntity {
    id;
    nome;
    usuario;
    senha;
    confirmPassword;
    dthrCriacao;
    tanks;
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        name: "confirm_password",
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "confirmPassword", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: "dthr_criacao",
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "dthrCriacao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tanks_entity_1.TanksEntity, (tanks) => tanks.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "tanks", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: "users",
    })
], UserEntity);
