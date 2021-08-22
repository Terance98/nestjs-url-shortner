import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';

const tempDB = {};
@Injectable()
export class ShortnerService {
  shorten(url: string) {
    const uniqueHash = randomBytes(4).toString('hex');

    tempDB[uniqueHash] = url;
    const shortenedUrl = `localhost:3000/${uniqueHash}`;
    return shortenedUrl;
  }
  getUrlsList() {
    return tempDB;
  }
}
