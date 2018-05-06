import { Module, OnModuleInit } from '@nestjs/common';
import { Registration } from './controlers/registration.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from './../mongooseSchema/registrtion';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: RegistrationSchema }]),
        // Joi,
    ],
    controllers: [
        Registration,
    ],
    components: [],
})
export class Login implements OnModuleInit {
    onModuleInit() {}
}