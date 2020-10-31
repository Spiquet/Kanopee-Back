"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var event_entity_1 = require("./../models/entity/event.entity");
var event_repository_1 = require("../repository/event.repository");
var typeorm_1 = require("typeorm");
var abstract_service_1 = require("../core/abstract.service");
var EventService = /** @class */ (function (_super) {
    __extends(EventService, _super);
    function EventService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repository = typeorm_1.getCustomRepository(event_repository_1.EventRepository);
        return _this;
    }
    EventService.prototype.getByIdEventKulteur = function (id) {
        return this.repository.find({ where: { user: id }, relations: ['user', 'atelier', 'site'] });
    };
    EventService.prototype.getByIdEventSite = function (id) {
        return this.repository.find({ where: { site: id }, relations: ['site', 'atelier', 'user'] });
    };
    EventService.prototype.getWorkshopsEvent = function () {
        return this.repository.find({ where: { eventType: event_entity_1.EventRole.ATELIER }, relations: ['atelier', 'site'] });
    };
    EventService.prototype.getAll = function () {
        return this.repository.find({ relations: ['particpations'] });
    };
    return EventService;
}(abstract_service_1.AbstractService));
exports.EventService = EventService;
