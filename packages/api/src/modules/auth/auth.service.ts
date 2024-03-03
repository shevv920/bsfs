import { Injectable } from '@nestjs/common';
import { AuthRepo } from '~/modules/auth/auth.repo';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepo: AuthRepo,
  ) {
  }

  async findOneByUserId(userId: string) {
    return this.authRepo.findOneByUserId(userId);
  }
}