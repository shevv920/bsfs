import { Injectable } from '@nestjs/common';
import { UserRepo } from '~/modules/user/user.repo';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {
  }

  async findOneByEmail(email: string) {
    return this.userRepo.findOneByEmail(email);
  }
}
