import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): object {
    return {'man': 'Hello World!'};
  }
}
