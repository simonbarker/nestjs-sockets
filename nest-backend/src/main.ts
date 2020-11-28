import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'x-client-id'],
    exposedHeaders: ['Set-Cookie'],
    credentials: true,
    origin: true,
  });
  await app.listen(7000);
}
bootstrap();
