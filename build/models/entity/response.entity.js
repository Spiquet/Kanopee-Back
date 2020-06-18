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
var message_entity_1 = require("./message.entity");
var user_entity_1 = require("./user.entity");
var Response = /** @class */ (function () {
    function Response() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Response.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Response.prototype, "content", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Response.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Response.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Response.prototype, "imgUrl", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return message_entity_1.Message; }, function (message) { return message.responses; }),
        __metadata("design:type", message_entity_1.Message)
    ], Response.prototype, "message", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.responses; }),
        __metadata("design:type", user_entity_1.User)
    ], Response.prototype, "user", void 0);
    Response = __decorate([
        typeorm_1.Entity()
    ], Response);
    return Response;
}());
exports.Response = Response;
