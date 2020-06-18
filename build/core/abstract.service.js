"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractService = /** @class */ (function () {
    function AbstractService() {
    }
    AbstractService.prototype.getAll = function () {
        return this.repository.find();
    };
    AbstractService.prototype.getById = function (id) {
        return this.repository.findOne(id);
    };
    AbstractService.prototype.add = function (element) {
        element = this.repository.create(element);
        return this.repository.save(element);
    };
    AbstractService.prototype.update = function (idElement, element) {
        return this.repository.update(idElement, element);
    };
    AbstractService.prototype.delete = function (id) {
        return this.repository.delete(id);
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;
