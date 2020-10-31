"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connected_middleware_1 = require("./../middleware/connected-middleware");
var response_service_1 = require("./../services/response.service");
var express_1 = require("express");
var comon_controller_1 = require("../core/comon.controller");
exports.ResponseController = function (app) {
    var responseService = new response_service_1.ResponseService();
    var router = express_1.Router();
    router.use(connected_middleware_1.connected());
    router = comon_controller_1.commonController(responseService, router);
    app.use('/responses', router);
};
