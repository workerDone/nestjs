import { Module, OnModuleInit } from '@nestjs/common';
import { RegistrationController } from './controlers/registration.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from './../mongooseSchema/registrtion';
import { LoginController } from './controlers/login.controller';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: RegistrationSchema }]),
    ],
    controllers: [
        RegistrationController,
        LoginController,
    ],
    components: [],
})
export class Login {}