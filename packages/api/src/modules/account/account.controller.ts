import { Controller, Post } from '@nestjs/common';

@Controller('/account')
export class AccountController {
  @Post('/sign-in')
  async signIn() {
    throw new Error('Not implemented');
  }
}

