import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserRegistration } from './components/registration';
import { RegistrationController } from './registration.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/catsModule';
import { UserSchema } from './mongooseSchema/user';
import { Login } from './loginIssue/login.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://Ivan:Ivan@cluster0-shard-00-00-n5kxm.mongodb.net:27017,cluster0-shard-00-01-n5kxm.mongodb.net:27017,cluster0-shard-00-02-n5kxm.mongodb.net:27017/MyMonDb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'),
    CatsModule,
    MongooseModule.forFeature([{ name: 'Man', schema: UserSchema }]),
    Login,
  ],
  controllers: [
    AppController,
    RegistrationController,
  ],
  components: [UserRegistration],
})
export class AppModule {}
