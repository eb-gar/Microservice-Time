import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('get_time')

  getTime(): string {
    return new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' });
  }
}
