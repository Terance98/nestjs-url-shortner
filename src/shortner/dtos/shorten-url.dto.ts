import { IsUrl, IsString } from 'class-validator';

export class ShortenUrlDto {
  @IsUrl()
  @IsString()
  url: string;
}
