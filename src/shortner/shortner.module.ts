import { Module } from '@nestjs/common';
import { ShortnerController } from './shortner.controller';
import { ShortnerService } from './shortner.service';

@Module({
  providers: [ShortnerService],
  exports: [ShortnerModule],
  controllers: [ShortnerController],
})
export class ShortnerModule {}
