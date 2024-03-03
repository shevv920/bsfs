import { NestFactory } from '@nestjs/core';
import { AppModule } from '~/modules/app.module';
import { INestApplication } from '@nestjs/common';

async function main() {
  const appModule: INestApplication = await NestFactory.create(AppModule);
  await appModule.listen(3000);
}

main();