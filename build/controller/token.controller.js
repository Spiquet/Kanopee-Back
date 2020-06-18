"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var site_service_1 = require("./../services/site.service");
var comon_controller_1 = require("../core/comon.controller");
exports.SiteController = function (app) {
    var siteService = new site_service_1.SiteService();
    var router = comon_controller_1.commonController(siteService);
    app.use('/sites', router);
};
