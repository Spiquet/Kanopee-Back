"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_repository_1 = require("./../repository/token.repository");
var typeorm_1 = require("typeorm");
var TokenService = /** @class */ (function () {
    function TokenService() {
        this.repository = typeorm_1.getCustomRepository(token_repository_1.TokenRepository);
    }
    TokenService.prototype.create = function (token) {
        token = this.repository.create(token);
        return this.repository.save(token);
    };
    TokenService.prototype.getByValue = function (value) {
        return this.repository.findOne({ value: value }, { relations: ['user'] });
    };
    return TokenService;
}());
exports.TokenService = TokenService;
