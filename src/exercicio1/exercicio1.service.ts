import { Injectable } from '@nestjs/common';
import { CreateEx1Dto } from './dto/create-ex1-dto';
import { Users } from './entities/ex.entities';

@Injectable()
export class ex1Service {
    exs1: Users[] = []
  findAll() {
    return 'Buscar todas as mesas';
  }

  create(createEx1Dto: CreateEx1Dto) {
    const ex1: Users = {id: 'Random_id', ...createEx1Dto}

    this.exs1.push(ex1)

    return 'Criar uma mesa';
  }
}