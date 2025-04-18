import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateBreadDto {
  @IsNotEmpty({ message: '이름 적으셈' })
  @IsString()
  name: string; // 1~10 글자

  @IsNotEmpty({ message: '가격 적으셈' })
  @IsNumber({}, { message: '가격은 숫자여야함' })
  @Min(0)
  @Max(10000000)
  price: number;
}
