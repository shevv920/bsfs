import { Module } from '@nestjs/common';
import { AppController } from '~/modules/app.controller';
import { UserModule } from '~/modules/user/user.module';
import { AccountModule } from '~/modules/account/account.module';
import { AuthModule } from '~/modules/auth/auth.module';
import { PrismaModule } from '~/modules/prisma/prisma.module';

@Module({
  imports: [UserModule, AccountModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
