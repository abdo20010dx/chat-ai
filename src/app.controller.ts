import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { chatApi } from './libs/openapi';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('chat-ai')
  async chatWithAi(@Body() body: any) {
    return { message: await chatApi(body.message) }
  }

  @Get('chat-ai')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

}
