import { Injectable } from '@nestjs/common';
import { ShortnerService } from './shortner/shortner.service';

@Injectable()
export class AppService {
  constructor(private shortnerService: ShortnerService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getOriginalUrl(id: string): string {
    const tempDB = this.shortnerService.getUrlsList();
    return tempDB[id];
  }
}
