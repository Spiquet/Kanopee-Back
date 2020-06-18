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
var atelier_repository_1 = require("../repository/atelier.repository");
var typeorm_1 = require("typeorm");
var abstract_service_1 = require("../core/abstract.service");
var AtelierService = /** @class */ (function (_super) {
    __extends(AtelierService, _super);
    function AtelierService() {
        var _this = _super.call(this) || this;
        _this.repository = typeorm_1.getCustomRepository(atelier_repository_1.AtelierRepository);
        return _this;
    }
    AtelierService.prototype.setupAtelier = function (atelier, files) {
        if (files[0]) {
            atelier.userSupport = 'uploads/' + files[0].filename;
        }
        if (files[1]) {
            atelier.kulteurSupport = 'uploads/' + files[1].filename;
        }
        return atelier;
    };
    AtelierService.prototype.create = function (atelier, files) {
        this.add(this.setupAtelier(atelier, files));
    };
    AtelierService.prototype.updateFile = function (atelier, files) {
        atelier = this.setupAtelier(atelier, files);
        this.update(atelier.id, atelier);
    };
    return AtelierService;
}(abstract_service_1.AbstractService));
exports.AtelierService = AtelierService;
