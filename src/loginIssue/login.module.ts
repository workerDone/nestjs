import { Module, OnModuleInit } from '@nestjs/common';
import { Registration } from './controlers/registration.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../mongooseSchema/user';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [Registration],
    components: [],
})
export class Login implements OnModuleInit {
    onModuleInit() {}
}