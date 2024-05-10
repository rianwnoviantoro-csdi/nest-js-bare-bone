import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { config } from './config'
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const options = new DocumentBuilder()
    .setTitle('Booking App Documentation')
    .setDescription('REST API Documentation for Booking App')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document);

  app.enableCors();

  await app.listen(config.port);

  Logger.log(`App running on http://localhost:${config.port}`);
  Logger.log(`See the documentation at http://localhost:${config.port}/docs`);
}
bootstrap();
