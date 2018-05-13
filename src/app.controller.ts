import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from './components/registration';
import { create } from 'domain';
import { UserRegistrtion } from './interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationSchema } from './mongooseSchema/registrtion';

@Controller()
export class AppController {
  constructor(
    @InjectModel(RegistrationSchema) private catModel: Model<UserRegistrtion>,
    private userRegistration: UserRegistration,
  ){}

  @Post()
  async create(@Body() user: UserRegistrtion) {
    this.userRegistration.setUser(user);
  }

  @Get()
  async getUsers(): Promise<UserRegistrtion[]> {
    return this.userRegistration.findAllUser();
  }

  @Get('join')
  join(): string {
    throw new HttpException('Forbidden', HttpStatus.ACCEPTED);
  }
  @Get('find')
  async find(): Promise<UserRegistrtion[]> {
    return await this.catModel.find().exec();
  }
}
