import { Module } from '@nestjs/common';
import { AuthService } from '~/modules/auth/auth.service';
import { AuthRepo } from '~/modules/auth/auth.repo';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthService, AuthRepo],
  exports: [AuthService],
})
export class AuthModule {
}
