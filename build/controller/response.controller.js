"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response_service_1 = require("./../services/response.service");
var comon_controller_1 = require("../core/comon.controller");
exports.ResponseController = function (app) {
    var responseService = new response_service_1.ResponseService();
    var router = comon_controller_1.commonController(responseService);
    app.use('/responses', router);
};
