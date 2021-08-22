import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortnerModule } from './shortner/shortner.module';
import { ShortnerService } from './shortner/shortner.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ShortnerModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ShortnerService],
})
export class AppModule {}
