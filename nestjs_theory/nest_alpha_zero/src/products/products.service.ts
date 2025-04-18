import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  // ORM 라이브러리 == [레포지토리]
  constructor(
    @InjectRepository(Product) private productRepositoty: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepositoty.create(createProductDto);
    this.productRepositoty.save(newProduct);
    return '저장댐';
  }

  findAll() {
    return this.productRepositoty.find();
  }

  findOne(id: number) {
    return this.productRepositoty.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
