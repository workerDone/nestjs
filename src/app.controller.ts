import { Get, Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserRegistration } from './components/registration';
import { create } from 'domain';
import { User } from './interfice/user';

@Controller()
export class AppController {
  constructor(
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
}
