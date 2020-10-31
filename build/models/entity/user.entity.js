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
var site_entity_1 = require("./site.entity");
var response_entity_1 = require("./response.entity");
var message_entity_1 = require("./message.entity");
var participation_entity_1 = require("./participation.entity");
var event_entity_1 = require("./event.entity");
var UserRole;
(function (UserRole) {
    UserRole["GHOST"] = "ghost";
    UserRole["USER"] = "user";
    UserRole["KULTEUR"] = "kulteur";
    UserRole["ADMIN"] = "admin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var User = /** @class */ (function () {
    function User(input) {
        Object.assign(this, input);
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "birth_date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "home", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "tel", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: UserRole,
            default: UserRole.GHOST,
        }),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updateAt", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return site_entity_1.Site; }, function (site) { return site.users; }, { eager: true }),
        __metadata("design:type", site_entity_1.Site)
    ], User.prototype, "site", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return message_entity_1.Message; }, function (message) { return message.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "messages", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return participation_entity_1.Participation; }, function (participation) { return participation.user; }, { cascade: true, onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Array)
    ], User.prototype, "participations", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return event_entity_1.Event; }, function (event) { return event.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "events", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return response_entity_1.Response; }, function (response) { return response.user; }, { cascade: true, onDelete: 'CASCADE' }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Array)
    ], User.prototype, "responses", void 0);
    User = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [User])
    ], User);
    return User;
}());
exports.User = User;
