import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  redirectUrl(@Param('id') id: string, @Res() res): string {
    const actualUrl = this.appService.getOriginalUrl(id);
    if (!actualUrl) return res.redirect('http://localhost:3000');
    return res.redirect(actualUrl);
  }
}
