import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Rank } from '../entities/customer.entity';

export class CreateCustomerDto {
  @IsNotEmpty({ message: '이름 적으셈' })
  @IsString()
  @Length(1, 10)
  name: string;

  @IsNotEmpty({ message: '가격 적으셈' })
  @IsEnum(Rank, { message: '유효한 랭크가 아님' })
  rank: Rank;
}
