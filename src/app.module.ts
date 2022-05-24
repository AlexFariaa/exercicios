import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ex1Module } from './exercicio1/exercicio1.module';

@Module({
  imports: [ex1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
