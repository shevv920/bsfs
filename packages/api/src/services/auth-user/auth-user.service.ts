import { UserId } from '~/types';
import { UserRepo } from '~/repos/user.repo';
import { AuthRepo } from '~/repos/auth.repo';
import { User } from '@prisma/client';

export interface AuthUserService {
  tryAuthorize(userId: UserId, password: string): Promise<User>;
}

export class AuthUserServiceLive implements AuthUserService {
  constructor(
    private readonly userService: UserRepo,
    private readonly authService: AuthRepo,
  ) {
  }

  tryAuthorize(userId: UserId, password: string): Promise<User> {
    const user = this.userService.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const auth = this.authService.findByUserIdAndPassword(userId, password);

    if (!auth) {
      throw new Error('Invalid password');
    }

    return user;
  }
}
