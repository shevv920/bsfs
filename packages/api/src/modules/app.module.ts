import { Module } from '@nestjs/common';
import { AppController } from '~/modules/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
