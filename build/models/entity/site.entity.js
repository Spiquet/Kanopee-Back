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
var message_entity_1 = require("./message.entity");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var event_entity_1 = require("./event.entity");
var Site = /** @class */ (function () {
    function Site() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Site.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Site.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Site.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Site.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Site.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Site.prototype, "postcode", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Site.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return user_entity_1.User; }, function (user) { return user.site; }, { cascade: true, onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Array)
    ], Site.prototype, "users", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return event_entity_1.Event; }, function (event) { return event.site; }),
        __metadata("design:type", Array)
    ], Site.prototype, "events", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return message_entity_1.Message; }, function (message) { return message.site; }),
        __metadata("design:type", Array)
    ], Site.prototype, "messages", void 0);
    Site = __decorate([
        typeorm_1.Entity()
    ], Site);
    return Site;
}());
exports.Site = Site;
