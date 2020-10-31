"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connected_middleware_1 = require("./../middleware/connected-middleware");
var site_service_1 = require("./../services/site.service");
var express_1 = require("express");
var comon_controller_1 = require("../core/comon.controller");
exports.SiteController = function (app) {
    var siteService = new site_service_1.SiteService();
    var router = express_1.Router();
    router.use(connected_middleware_1.connected());
    router = comon_controller_1.commonController(siteService);
    app.use('/sites', router);
};
