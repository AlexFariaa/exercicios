import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEx1Dto } from './dto/create-ex1-dto';
import { ex1Service } from './exercicio1.service';

@Controller()
export class ex1Controller {
  constructor(private ex1Service: ex1Service) {}

  @Get()
  findAll() {
    return this.ex1Service.findAll();
  }

  @Post()
  create(@Body() createEx1Dto: CreateEx1Dto) {
    return this.ex1Service.create(createEx1Dto);
  }
}