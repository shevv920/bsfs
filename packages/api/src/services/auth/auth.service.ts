import { AuthRepo } from '~/repos/auth.repo';

export interface AuthService {
}

export class AuthServiceLive implements AuthService {
  constructor(
    private readonly authRepo: AuthRepo,
  ) {
  }

}
