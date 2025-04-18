import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepositoty: Repository<Customer>,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = this.customerRepositoty.create(createCustomerDto);
    this.customerRepositoty.save(newCustomer);
    return '손님 업데이트 완';
  }

  findAll() {
    return this.customerRepositoty.find();
  }

  findOne(id: number) {
    return this.customerRepositoty.findOne({ where: { id } });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
