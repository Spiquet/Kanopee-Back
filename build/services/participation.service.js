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
var typeorm_1 = require("typeorm");
var participation_repository_1 = require("./../repository/participation.repository");
var abstract_service_1 = require("../core/abstract.service");
var ParticipationService = /** @class */ (function (_super) {
    __extends(ParticipationService, _super);
    function ParticipationService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repository = typeorm_1.getCustomRepository(participation_repository_1.ParticipationRepository);
        return _this;
    }
    return ParticipationService;
}(abstract_service_1.AbstractService));
exports.ParticipationService = ParticipationService;
