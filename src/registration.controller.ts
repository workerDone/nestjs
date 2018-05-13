import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from './components/registration'
import { create } from 'domain';
import { UserRegistrtion } from './interfice/user';

@Controller('help')
export class RegistrationController {
  constructor(
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
}
