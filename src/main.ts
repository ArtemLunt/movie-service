import { configureSwagger } from '@app/swagger';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });

  configureSwagger(app);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
