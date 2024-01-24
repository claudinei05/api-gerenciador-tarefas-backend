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
exports.TanksEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let TanksEntity = class TanksEntity {
    id;
    description;
    detailing;
    idUser;
    dthrCriacao;
    dthrAtualizacao;
    user;
    beforeUpdate() {
        this.dthrAtualizacao = new Date();
    }
};
exports.TanksEntity = TanksEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: "id_message",
    }),
    __metadata("design:type", String)
], TanksEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
    }),
    __metadata("design:type", String)
], TanksEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
    }),
    __metadata("design:type", String)
], TanksEntity.prototype, "detailing", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "id_user",
    }),
    __metadata("design:type", String)
], TanksEntity.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp",
        name: "dthr_Criacao",
    }),
    __metadata("design:type", Date)
], TanksEntity.prototype, "dthrCriacao", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: "dthr_Atualizacao",
    }),
    __metadata("design:type", Date)
], TanksEntity.prototype, "dthrAtualizacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)({
        name: "id_user",
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], TanksEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TanksEntity.prototype, "beforeUpdate", null);
exports.TanksEntity = TanksEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "tanks" })
], TanksEntity);
