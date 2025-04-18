import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest.js 공부해보기';
  }
  getTeemo(): string {
    return '티모';
  }
}
