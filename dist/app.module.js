"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const registration_1 = require("./components/registration");
const mongoose_1 = require("@nestjs/mongoose");
const registrtion_1 = require("./mongooseSchema/registrtion");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://Ivan:Ivan@cluster0-shard-00-00-n5kxm.mongodb.net:27017,cluster0-shard-00-01-n5kxm.mongodb.net:27017,cluster0-shard-00-02-n5kxm.mongodb.net:27017/MyMonDb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Man', schema: registrtion_1.RegistrationSchema }]),
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        components: [
            registration_1.UserRegistration,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map