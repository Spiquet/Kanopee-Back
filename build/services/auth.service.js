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
var environment_1 = require("./../environments/environment");
var token_entity_1 = require("./../models/entity/token.entity");
var user_repository_1 = require("../repository/user.repository");
var typeorm_1 = require("typeorm");
var argon2_1 = require("argon2");
var jsonwebtoken_1 = require("jsonwebtoken");
var crypto_1 = require("crypto");
var nodemailer_1 = require("nodemailer");
var token_service_1 = require("./token.service");
var user_service_1 = require("./user.service");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.repository = typeorm_1.getCustomRepository(user_repository_1.UserRepository);
        this.tokenService = new token_service_1.TokenService();
        this.userService = new user_service_1.UserService();
    }
    // Crypte le password
    AuthService.prototype.signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tokenString, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = user;
                        return [4 /*yield*/, argon2_1.hash(user.password)];
                    case 1:
                        _a.password = _b.sent(); // argon2
                        delete user.role;
                        user = this.repository.create(user); // Initialisation d'un objet user
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        user = _b.sent();
                        tokenString = crypto_1.randomBytes(12).toString('hex');
                        return [4 /*yield*/, this.nodemailer(tokenString, user)];
                    case 3:
                        _b.sent();
                        token = new token_entity_1.Token();
                        token.user = user;
                        token.value = tokenString;
                        // token.expiration = new Date(getTime() + 1000 * 60 * 60 * 24 * 2);
                        this.tokenService.create(token);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signin = function (email, password) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var error, user, isPasswordValid, payload, secret1, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        error = new Error('Invalid credentials');
                        return [4 /*yield*/, this.repository.findOne({ where: { email: email } })];
                    case 1:
                        user = _b.sent();
                        // tslint:disable-next-line: whitespace
                        if (!((_a = user) === null || _a === void 0 ? void 0 : _a.isActive)) {
                            throw new Error('NOT_ACTIVE');
                        }
                        if (!user) { // if not a user
                            throw error;
                        }
                        return [4 /*yield*/, argon2_1.verify(user.password, password)];
                    case 2:
                        isPasswordValid = _b.sent();
                        if (!isPasswordValid) {
                            throw error;
                        }
                        payload = { id: user.id, email: user.email, role: user.role };
                        secret1 = environment_1.environnment.JWT_SECRET;
                        if (!secret1) {
                            throw new Error('Servor not correctly configured'); // For the start of production  : if Variable environments not set
                        }
                        token = jsonwebtoken_1.sign(payload, secret1);
                        return [2 /*return*/, { token: token, user: user }];
                }
            });
        });
    };
    AuthService.prototype.confirmation = function (tokenStr) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenService.getByValue(tokenStr)];
                    case 1:
                        token = _a.sent();
                        if (!token) {
                            throw new Error('Lien invalide');
                        }
                        return [4 /*yield*/, this.userService.userActivation(token.user)];
                    case 2:
                        _a.sent(); // we call userActivation method to activate an account
                        return [2 /*return*/];
                }
            });
        });
    };
    // NODEMAILER
    AuthService.prototype.nodemailer = function (token, user) {
        return __awaiter(this, void 0, void 0, function () {
            var testAccount, transporter, info, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nodemailer_1.createTestAccount()];
                    case 1:
                        testAccount = _a.sent();
                        transporter = nodemailer_1.createTransport({
                            host: environment_1.environnment.mailHost,
                            port: environment_1.environnment.mailPort,
                            secure: false,
                            auth: {
                                user: testAccount.user,
                                pass: testAccount.pass,
                            },
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, transporter.sendMail({
                                from: environment_1.environnment.EMAIL,
                                to: user.email,
                                subject: 'Activation link',
                                html: "<b><a href=" + (environment_1.environnment.confirmationUrl + token) + ">\n        Activation link </a>\n        </b>",
                            })];
                    case 3:
                        info = _a.sent();
                        console.log('Message sent: %s', info.messageId);
                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer_1.getTestMessageUrl(info));
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
