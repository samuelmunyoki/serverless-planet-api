import { Length } from "class-validator";
import { LoginInput } from "./LoginInput";

export class RegisterInput extends LoginInput {
  @Length(6, 50)
  firstName: string;

  @Length(6, 50)
  lastName: string;

  @Length(10, 13)
  phoneNumber: number;
}
