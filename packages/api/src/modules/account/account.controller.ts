import { Body, Controller, Post } from '@nestjs/common';
import { AccountSignInDto } from '~/modules/account/dto/account.sign-in.dto';
import { AccountService } from '~/modules/account/account.service';

@Controller('/account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
  ) {
  }

  @Post('/sign-in')
  async signIn(@Body() signInDto: AccountSignInDto) {
    const { email, password } = signInDto;
    const token = await this.accountService.signIn(email, password);
    return { token };
  }
}

