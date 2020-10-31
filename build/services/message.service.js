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
var message_repository_1 = require("./../repository/message.repository");
var typeorm_1 = require("typeorm");
var abstract_service_1 = require("../core/abstract.service");
var messageRole_1 = require("../models/entity/messageRole");
var MessageService = /** @class */ (function (_super) {
    __extends(MessageService, _super);
    function MessageService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repository = typeorm_1.getCustomRepository(message_repository_1.MessageRepository);
        return _this;
    }
    MessageService.prototype.getMessages = function (user) {
        if (user.role === 'user') {
            return this.getMessagesBySiteId(user.site.id);
        }
        else if (user.role === 'admin' || user.role === 'kulteur') {
            return this.getAllMessages();
        }
    };
    MessageService.prototype.getAllMessages = function () {
        return this.repository.find({ where: { role: messageRole_1.MessageRole.MESSAGE }, relations: ['site', 'user'], order: { createdAt: 'DESC' } });
    };
    // getMessagesBySite(currentSite: Site) {
    //   return this.repository.find({ where: { site: currentSite } });
    // }
    MessageService.prototype.getMessagesBySiteId = function (SiteId) {
        return this.repository.find({ where: { site: { id: SiteId } }, relations: ['site', 'user'], order: { createdAt: 'DESC' } });
    };
    MessageService.prototype.getAllQuestions = function () {
        return this.repository.find({ where: { role: messageRole_1.MessageRole.QUESTION } });
    };
    return MessageService;
}(abstract_service_1.AbstractService));
exports.MessageService = MessageService;
