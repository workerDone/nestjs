import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../mongooseSchema/user';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [CatsController],
    components: [],
})
export class CatsModule {}