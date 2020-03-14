import { NestApplication } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTag } from '@app/swagger/tags';

export function configureSwagger(app: NestApplication) {
  let documentationConfigBuilder = new DocumentBuilder()
    .setTitle('Movie Service')
    .setDescription('Sample application for Grid Dynamics UI CoP technical talk');
  Object.values(SwaggerTag).forEach(tag => {
    documentationConfigBuilder = documentationConfigBuilder.addTag(tag);
  });
  const documentationConfig = documentationConfigBuilder.build();

  const document = SwaggerModule.createDocument(app, documentationConfig);
  SwaggerModule.setup('swagger-ui', app, document);
}
