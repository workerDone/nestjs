
import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from '../../components/registration';
import { create } from 'domain';
import { UserRegistrtion } from '../../interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationSchema } from '../../mongooseSchema/registrtion';

@Controller('login')
export class Login {
  constructor(
    @InjectModel(RegistrationSchema) private catModel: Model<UserRegistrtion>,
  ){}

  @Post()
  async addUsers(@Body() user: UserRegistrtion): Promise<any> {
   return await this.catModel.find({email: user.email}).exec()
    .then( data => {
      if ( !data.length ) {
        const createdCat = new this.catModel(user);
        createdCat.save();
        return HttpStatus.CREATED;
      } else {
        return new HttpException('User already exists', HttpStatus.FORBIDDEN);
      }
    })
    .catch( data => {
      return new HttpException('Catch error registration', HttpStatus.CONFLICT);
    });
  }

  @Get()
    async getUsers(): Promise<UserRegistrtion[]> {
        return await this.catModel.find().exec()
        .catch( data => {
          return new HttpException("DB doesn't work", HttpStatus.CONFLICT);
        });
    }
}