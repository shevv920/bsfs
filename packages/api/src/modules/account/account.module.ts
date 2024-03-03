import { Module } from '@nestjs/common';
import { AccountController } from '~/modules/account/account.controller';
import { UserModule } from '~/modules/user/user.module';
import { AuthModule } from '~/modules/auth/auth.module';
import { AccountService } from '~/modules/account/account.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [],
})
export class AccountModule {}
