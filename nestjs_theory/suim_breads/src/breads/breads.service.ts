import { Injectable } from '@nestjs/common';
import { CreateBreadDto } from './dto/create-bread.dto';
import { UpdateBreadDto } from './dto/update-bread.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bread } from './entities/bread.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BreadsService {
  constructor(
    @InjectRepository(Bread) private breadRepositoty: Repository<Bread>,
  ) {}
  create(createBreadDto: CreateBreadDto) {
    const newBread = this.breadRepositoty.create(createBreadDto);
    this.breadRepositoty.save(newBread);
    return '빵 업데이트 완';
  }

  findAll() {
    return this.breadRepositoty.find();
  }

  findOne(id: number) {
    return this.breadRepositoty.findOne({ where: { id } });
  }

  update(id: number, updateBreadDto: UpdateBreadDto) {
    return `This action updates a #${id} bread`;
  }

  remove(id: number) {
    return `This action removes a #${id} bread`;
  }
}
