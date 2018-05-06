
import { Get, Controller, Post, Body, HttpException, HttpStatus, Response } from '@nestjs/common';

import { create } from 'domain';
import { UserRegistrtion } from '../../interfice/user';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistrationSchema } from '../../mongooseSchema/registrtion';
import * as Joi from 'joi';

@Controller('registration')

export class RegistrationController {
  schema = Joi.object().keys({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email(),
  });

  constructor(
    @InjectModel(RegistrationSchema) private UserRegisterModel: Model<UserRegistrtion>,
  ) { }

  @Post()
  async addUsers(@Body() user: UserRegistrtion): Promise<any> {

    await Joi.validate(user, this.schema, (err, value) => {
      if (err) {
        return new HttpException('User error ', HttpStatus.BAD_REQUEST);
      }
    });

    return await this.UserRegisterModel.find({ email: user.email }).exec()
      .then(data => {
        if (!data.length) {
          const createdCat = new this.UserRegisterModel(user);
          createdCat.save();
          return HttpStatus.CREATED;
        } else {
          return new HttpException('User already exists', HttpStatus.FORBIDDEN);
        }
      })
      .catch(data => {
        return new HttpException('Catch error registration', HttpStatus.CONFLICT);
      });
  }

  @Get()
  async getUsers(): Promise<UserRegistrtion[]> {
    return await this.UserRegisterModel.find().exec()
      .catch(data => {
        return new HttpException("DB doesn't work", HttpStatus.CONFLICT);
      });
  }
}