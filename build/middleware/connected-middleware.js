"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("express-jwt");
var environment_1 = require("../environments/environment");
exports.connected = function () {
    var secret = environment_1.environnment.JWT_SECRET;
    if (!secret) {
        throw new Error('Pas de secret setup');
    }
    // Accroche du middleware avec secret
    return jwt({ secret: secret });
};
