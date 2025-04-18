export class CreateDogDto {
  id: number;
  name: string;
  gender: 'male' | 'female';
  age: number;
  species: string;
}
