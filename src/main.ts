import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from '@src/app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')

  const options = new DocumentBuilder()
    .setTitle('Thankee API')
    .setDescription('Public API of the Thankee Project')
    .setVersion('1.0')
    .addTag('thankee')
    .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('swagger-ui', app, document)

  await app.listen(3000)
}
bootstrap()
