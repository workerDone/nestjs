import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserRegistration } from './components/registration';
import { RegistrationController } from './registration.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    RegistrationController,
  ],
  components: [UserRegistration],
})
export class AppModule {}
