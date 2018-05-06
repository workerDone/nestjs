import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from './components/registration';
import { create } from 'domain';
import { User } from './interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationSchema } from './mongooseSchema/registrtion';

@Controller()
export class AppController {
  constructor(
    @InjectModel(RegistrationSchema) private catModel: Model<User>,
    private userRegistration: UserRegistration,
  ){}

  @Post()
  async create(@Body() user: User) {
    this.userRegistration.setUser(user);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userRegistration.findAllUser();
  }

  @Get('join')
  join(): string {
    throw new HttpException('Forbidden', HttpStatus.ACCEPTED);
  }
  @Get('find')
  async find(): Promise<User[]> {
    return await this.catModel.find().exec();
  }
}
