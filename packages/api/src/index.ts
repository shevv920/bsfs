import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/modules/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function main() {
  const appModule: INestApplication = await NestFactory.create(AppModule);
  appModule.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      whitelist: true,
      forbidUnknownValues: false,
    }),
  )
  await appModule.listen(3000);
}

main();