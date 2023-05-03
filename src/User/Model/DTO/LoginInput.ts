import { Length, IsEmail } from "class-validator";

export class LoginInput {
  @IsEmail()
  emailAddress: string;

  @Length(8, 50)
  password: string;
}
