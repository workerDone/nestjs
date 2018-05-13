
import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from '../../components/registration';
import { create } from 'domain';
import { UserRegistrtion } from '../../interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationSchema } from '../../mongooseSchema/registrtion';

@Controller('login')
export class LoginController {
  constructor(
    @InjectModel(RegistrationSchema) private UserRegisterModel: Model<UserRegistrtion>,
  ){}

  @Post()
  async addUsers(@Body() user: UserRegistrtion): Promise<any> {
   return await this.UserRegisterModel.find({email: user.email, password: user.password }).exec()
    .then( data => {
      if ( !data.length ) {
        return new HttpException('User not found', HttpStatus.FORBIDDEN);
      } else {
        return  HttpStatus.ACCEPTED;
      }
    })
    .catch( data => {
      return new HttpException('Catch error registration', HttpStatus.CONFLICT);
    });
  }

  @Get()
    async getUsers(): Promise<UserRegistrtion[]> {
        return await this.UserRegisterModel.find().exec()
        .catch( data => {
          return new HttpException("DB doesn't work", HttpStatus.CONFLICT);
        });
    }
}