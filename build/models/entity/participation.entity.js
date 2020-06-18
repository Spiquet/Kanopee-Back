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
var user_entity_1 = require("./../entity/user.entity");
var typeorm_1 = require("typeorm");
var event_entity_1 = require("./event.entity");
var Participation = /** @class */ (function () {
    function Participation() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Participation.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.participations; }),
        __metadata("design:type", user_entity_1.User)
    ], Participation.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return event_entity_1.Event; }, function (event) { return event.particpations; }),
        __metadata("design:type", event_entity_1.Event)
    ], Participation.prototype, "event", void 0);
    Participation = __decorate([
        typeorm_1.Entity()
    ], Participation);
    return Participation;
}());
exports.Participation = Participation;
