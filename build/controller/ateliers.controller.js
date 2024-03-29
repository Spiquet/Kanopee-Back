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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var atelier_service_1 = require("./../services/atelier.service");
var multer_1 = __importDefault(require("multer"));
var comon_controller_1 = require("../core/comon.controller");
exports.AteliersController = function (app) {
    var atelierService = new atelier_service_1.AtelierService();
    var router = comon_controller_1.commonController(atelierService);
    app.use('/ateliers', router);
    var storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.pdf');
        },
    });
    var upload = multer_1.default({ storage: storage,
        fileFilter: function (req, file, cb) {
            if (!file.originalname.match(/\.(pdf)$/)) {
                return cb(new Error('Seul les formats PDF sont acceptés'), false);
            }
            cb(null, true);
        },
    });
    var cpUpload = upload.fields([
        { name: 'userSupport', maxCount: 1 },
        { name: 'kulteurSupport', maxCount: 1 },
    ]);
    router.post('/file', cpUpload, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var files, error, _a, _b;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    files = req.files;
                    if (!files) {
                        error = new Error('Please upload a file');
                        res.sendStatus(400);
                        return [2 /*return*/, next(error)];
                    }
                    _b = (_a = res).send;
                    return [4 /*yield*/, atelierService.create(req.body, [(_c = files) === null || _c === void 0 ? void 0 : _c.userSupport[0], (_d = files) === null || _d === void 0 ? void 0 : _d.kulteurSupport[0]])];
                case 1:
                    _b.apply(_a, [_e.sent()]);
                    return [2 /*return*/];
            }
        });
    }); });
    router.put('/fileupload', cpUpload, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var files, _a, _b;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    files = req.files;
                    _b = (_a = res).send;
                    return [4 /*yield*/, atelierService.updateFile(req.body, [(_c = files) === null || _c === void 0 ? void 0 : _c.userSupport[0], (_d = files) === null || _d === void 0 ? void 0 : _d.kulteurSupport[0]])];
                case 1:
                    _b.apply(_a, [_e.sent()]);
                    return [2 /*return*/];
            }
        });
    }); });
    return router;
};
