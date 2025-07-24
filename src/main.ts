import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const transport = process.env.TRANSPORT || 'tcp';

  let options: MicroserviceOptions;

  switch (transport) {
    case 'nats':
      options = {
        transport: Transport.NATS,
        options: {
          url: process.env.NATS_URL,
          queue: process.env.NATS_QUEUE,
        },
      };
      break;

    case 'tcp':
    default:
      options = {
        transport: Transport.TCP,
        options: {
          host: process.env.TCP_HOST || '127.0.0.1',
          port: parseInt(process.env.TCP_PORT || '3001'),
        },
      };
      break;
  }

  console.log(`Microservicio usando transporte: ${transport.toUpperCase()}`);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, options);
  await app.listen();
}
bootstrap();
