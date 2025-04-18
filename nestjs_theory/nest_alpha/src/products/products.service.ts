import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return '상품 등록';
  }

  findAll() {
    return `모든 상품 조회`;
  }

  findOne(id: number) {
    return `#${id} 상품 조회`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `#${id} 상품 정보 수정`;
  }

  remove(id: number) {
    return `#${id} 상품 삭제`;
  }
}
