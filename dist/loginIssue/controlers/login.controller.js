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
const user_1 = require("../../interfice/user");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const registrtion_1 = require("../../mongooseSchema/registrtion");
let LoginController = class LoginController {
    constructor(catModel) {
        this.catModel = catModel;
    }
    addUsers(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.catModel.find({ email: user.email, password: user.password }).exec()
                .then(data => {
                if (!data.length) {
                    return new common_1.HttpException('User not found', common_1.HttpStatus.FORBIDDEN);
                }
                else {
                    return common_1.HttpStatus.ACCEPTED;
                }
            })
                .catch(data => {
                return new common_1.HttpException('Catch error registration', common_1.HttpStatus.CONFLICT);
            });
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.catModel.find().exec()
                .catch(data => {
                return new common_1.HttpException("DB doesn't work", common_1.HttpStatus.CONFLICT);
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserRegistrtion]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "addUsers", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getUsers", null);
LoginController = __decorate([
    common_1.Controller('login'),
    __param(0, mongoose_1.InjectModel(registrtion_1.RegistrationSchema)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" && _a || Object])
], LoginController);
exports.LoginController = LoginController;
var _a;
//# sourceMappingURL=login.controller.js.map