import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from '../components/registration';
import { create } from 'domain';
import { User } from '../interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema } from '../mongooseSchema/user';

@Controller('mongodb')
export class CatsController {
  constructor(
    @InjectModel(UserSchema) private catModel: Model<User>,
  ){}
  @Post()
  async addUsers(@Body() user: User): Promise<User[]> {
    const createdCat = new this.catModel(user);
    return await createdCat.save();
  }
  @Get()
    async getUsers(): Promise<User[]> {
        return await this.catModel.find().exec();
    }
}
