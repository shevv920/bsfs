import { IsEmail, IsNotEmpty } from "class-validator";

export class AccountSignInDto {
  @IsEmail()
  email!: string;
  @IsNotEmpty()
  password!: string;
}
