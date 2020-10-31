"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = function (roles) {
    return function (req, res, next) {
        var userRole = req.user.role;
        if (roles.includes(userRole)) {
            next();
        }
        else {
            res.sendStatus(400);
        }
    };
};
