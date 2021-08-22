import { Controller, Post, Body } from '@nestjs/common';
import { ShortenUrlDto } from './dtos/shorten-url.dto';
import { ShortnerService } from './shortner.service';

@Controller('shorten')
export class ShortnerController {
  constructor(private shortnerService: ShortnerService) {}
  @Post()
  shortenUrl(@Body() body: ShortenUrlDto) {
    return this.shortnerService.shorten(body.url);
  }
}
