"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comon_controller_1 = require("./../core/comon.controller");
var participation_service_1 = require("./../services/participation.service");
exports.ParticipationController = function (app) {
    var participationService = new participation_service_1.ParticipationService();
    var router = comon_controller_1.commonController(participationService);
    app.use('/participations', router);
};
