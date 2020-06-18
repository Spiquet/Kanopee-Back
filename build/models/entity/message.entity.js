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
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var response_entity_1 = require("./response.entity");
var MessageRole_1 = require("./MessageRole");
var Message = /** @class */ (function () {
    function Message() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Message.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Message.prototype, "content", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Message.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Message.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: MessageRole_1.MessageRole,
            default: MessageRole_1.MessageRole.MESSAGE,
        }),
        __metadata("design:type", String)
    ], Message.prototype, "role", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.messages; }),
        __metadata("design:type", user_entity_1.User)
    ], Message.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return response_entity_1.Response; }, function (response) { return response.message; }),
        __metadata("design:type", Array)
    ], Message.prototype, "responses", void 0);
    Message = __decorate([
        typeorm_1.Entity()
    ], Message);
    return Message;
}());
exports.Message = Message;
