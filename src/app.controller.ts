import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abc')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/test/:id?')
  getHello(@Param() param, @Request() req): any {
    if (req) {
      return this.appService.getHello(param);
    } else {
      return {

      }
    }

  }

  @Post('adddata')
  addHello(): any {
    return this.appService.SaveData();
  }
}
