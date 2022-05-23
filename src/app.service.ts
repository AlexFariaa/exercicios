import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Serverr is running! 🚀\n Please check http://localhost:3333/api for Swagger docs...';
  }
}
