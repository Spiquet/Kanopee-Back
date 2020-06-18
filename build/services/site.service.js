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
var site_repository_1 = require("./../repository/site.repository");
var typeorm_1 = require("typeorm");
var abstract_service_1 = require("../core/abstract.service");
var SiteService = /** @class */ (function (_super) {
    __extends(SiteService, _super);
    function SiteService() {
        var _this = _super.call(this) || this;
        _this.repository = typeorm_1.getCustomRepository(site_repository_1.SiteRepository);
        return _this;
    }
    return SiteService;
}(abstract_service_1.AbstractService));
exports.SiteService = SiteService;
