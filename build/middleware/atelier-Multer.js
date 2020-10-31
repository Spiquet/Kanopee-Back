"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
exports.multerMiddleWare = function () {
    var storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.pdf');
        },
    });
    var upload = multer_1.default({
        storage: storage,
        fileFilter: function (req, file, cb) {
            if (!file.originalname.match(/\.(pdf)$/)) {
                return cb(new Error('Seul les formats PDF sont acceptés'), false);
            }
            cb(null, true);
        },
    });
    var cpUpload = upload.fields([{ name: 'userSupport', maxCount: 1 }, { name: 'kulteurSupport', maxCount: 1 }]);
    return cpUpload;
};
