"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var token_entity_1 = require("./../models/entity/token.entity");
var user_entity_1 = require("./../models/entity/user.entity");
var typeorm_1 = require("typeorm");
var atelier_entity_1 = require("./../models/entity/atelier.entity");
var event_entity_1 = require("../models/entity/event.entity");
var message_entity_1 = require("../models/entity/message.entity");
var participation_entity_1 = require("../models/entity/participation.entity");
var response_entity_1 = require("../models/entity/response.entity");
var site_entity_1 = require("../models/entity/site.entity");
exports.default = (function () { return __awaiter(void 0, void 0, void 0, function () {
    var connection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.createConnection({
                    type: 'mysql',
                    host: '51.178.16.103',
                    port: 1234,
                    username: process.env.WILD_API_DB_USER,
                    password: process.env.WILD_API_DB_PASSWORD,
                    database: process.env.WILD_API_DB_DATABASE,
                    entities: [
                        atelier_entity_1.Atelier,
                        site_entity_1.Site,
                        user_entity_1.User,
                        event_entity_1.Event,
                        message_entity_1.Message,
                        participation_entity_1.Participation,
                        response_entity_1.Response,
                        token_entity_1.Token,
                    ],
                    synchronize: true,
                })];
            case 1:
                connection = _a.sent();
                return [2 /*return*/, connection];
        }
    });
}); });
