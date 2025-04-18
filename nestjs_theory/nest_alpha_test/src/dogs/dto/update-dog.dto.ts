import { PartialType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create-dog.dto';

export class UpdateDogDto extends PartialType(CreateDogDto) {
  id?: number | undefined;
  name?: string | undefined;
  species?: string | undefined;
  age?: number | undefined;
  gender?: 'male' | 'female' | undefined;
}
