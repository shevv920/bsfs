import { Context, Hono, TypedResponse } from 'hono';
import { AuthService } from '~/services/auth/auth.service';
import { UserService } from '~/services/user/user.service';

export class AuthControllerLive {
  routes: Hono;
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    this.routes = new Hono();

    this.routes.post('/sign-in', this.signIn);
  }

  signIn = (c: Context) => {
    return c.json({
      token: '1234',
    });
  }
}
