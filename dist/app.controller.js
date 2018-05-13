"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const registration_1 = require("./components/registration");
const user_1 = require("./interfice/user");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const registrtion_1 = require("./mongooseSchema/registrtion");
let AppController = class AppController {
    constructor(catModel, userRegistration) {
        this.catModel = catModel;
        this.userRegistration = userRegistration;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userRegistration.setUser(user);
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRegistration.findAllUser();
        });
    }
    join() {
        throw new common_1.HttpException('Forbidden', common_1.HttpStatus.ACCEPTED);
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.catModel.find().exec();
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserRegistrtion]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUsers", null);
__decorate([
    common_1.Get('join'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "join", null);
__decorate([
    common_1.Get('find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "find", null);
AppController = __decorate([
    common_1.Controller(),
    __param(0, mongoose_1.InjectModel(registrtion_1.RegistrationSchema)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" && _a || Object, registration_1.UserRegistration])
], AppController);
exports.AppController = AppController;
var _a;
//# sourceMappingURL=app.controller.js.map