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
var atelier_entity_1 = require("./atelier.entity");
var site_entity_1 = require("./site.entity");
var participation_entity_1 = require("./participation.entity");
var Event = /** @class */ (function () {
    function Event() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Event.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp' }),
        __metadata("design:type", Date)
    ], Event.prototype, "startAt", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp', default: function () { return 'CURRENT_TIMESTAMP'; } }),
        __metadata("design:type", Date)
    ], Event.prototype, "endAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.events; }, { eager: true }),
        __metadata("design:type", user_entity_1.User)
    ], Event.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return atelier_entity_1.Atelier; }, function (atelier) { return atelier.events; }, { eager: true }),
        __metadata("design:type", atelier_entity_1.Atelier)
    ], Event.prototype, "atelier", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return site_entity_1.Site; }, function (site) { return site.events; }, { eager: true }),
        __metadata("design:type", site_entity_1.Site)
    ], Event.prototype, "site", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return participation_entity_1.Participation; }, function (participation) { return participation.event; }),
        __metadata("design:type", participation_entity_1.Participation)
    ], Event.prototype, "particpations", void 0);
    Event = __decorate([
        typeorm_1.Entity()
    ], Event);
    return Event;
}());
exports.Event = Event;
