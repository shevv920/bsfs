import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from '~/modules/user/user.service';
import { AuthService } from '~/modules/auth/auth.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const auth = await this.authService.findOneByUserId(user.id);
    if (!auth) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = Bun.password.verify(password, auth.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('User not found\'');
    }

    return 'token';
  }
}