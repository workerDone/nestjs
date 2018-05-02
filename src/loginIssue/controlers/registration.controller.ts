
import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from '../../components/registration';
import { create } from 'domain';
import { User } from '../../interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema } from '../../mongooseSchema/user';

@Controller('registration')
export class Registration {
  constructor(
    @InjectModel(UserSchema) private catModel: Model<User>,
  ){}

  @Post()
  async addUsers(@Body() user: User): Promise<any> {
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
    async getUsers(): Promise<User[]> {
        return await this.catModel.find().exec()
        .catch( data => {
          return new HttpException("DB doesn't work", HttpStatus.CONFLICT);
        });
    }
}