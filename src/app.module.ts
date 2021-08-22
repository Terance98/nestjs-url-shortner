import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortnerModule } from './shortner/shortner.module';
import { ShortnerService } from './shortner/shortner.service';

@Module({
  imports: [ShortnerModule],
  controllers: [AppController],
  providers: [AppService, ShortnerService],
})
export class AppModule {}
