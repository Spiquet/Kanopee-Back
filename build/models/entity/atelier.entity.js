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
var event_entity_1 = require("./event.entity");
var Atelier = /** @class */ (function () {
    function Atelier() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Atelier.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "duration", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "userSupport", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "kulteurSupport", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "link1", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Atelier.prototype, "link2", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Atelier.prototype, "link3", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Atelier.prototype, "link4", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Atelier.prototype, "link5", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Atelier.prototype, "link6", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return event_entity_1.Event; }, function (event) { return event.atelier; }),
        __metadata("design:type", Array)
    ], Atelier.prototype, "events", void 0);
    Atelier = __decorate([
        typeorm_1.Entity('atelier')
    ], Atelier);
    return Atelier;
}());
exports.Atelier = Atelier;
