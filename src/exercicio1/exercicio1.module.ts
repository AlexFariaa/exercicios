import { Module } from '@nestjs/common';
import { ex1Controller } from './exercicio1.controller';
import { ex1Service } from './exercicio1.service';

@Module({
  controllers: [ex1Controller],
  providers: [ex1Service],
})
export class ex1Module {}