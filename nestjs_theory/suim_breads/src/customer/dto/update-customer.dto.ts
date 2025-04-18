import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { Rank } from '../entities/customer.entity';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  name?: string | undefined;
  rank?: Rank | undefined;
}
