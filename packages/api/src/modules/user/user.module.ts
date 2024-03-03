import { Module } from '@nestjs/common';
import { UserService } from '~/modules/user/user.service';
import { UserController } from '~/modules/user/user.controller';
import { UserRepo } from '~/modules/user/user.repo';

@Module({
  imports: [],
  providers: [UserService, UserRepo],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
