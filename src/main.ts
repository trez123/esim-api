import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const fs = require('fs');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:9000', 'https://esim.byllkreate.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Keepgo Travelers REST API Wrapper')
    .setDescription(
      'Keepgo API is a primary way to get data in and out of the Keepgo Console. You can use Keepgo API to control your account, view balance reports, receive a list of lines that belong to your Partner Account, change line status, receive usage data, refill lines, etc. This is a wrapper used to act as a bridge between the keepgo api and the application.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'Authorization',
    )
    .addTag('Enpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('/', app, document);

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
