export class UserRepository {
  constructor() {}
  async registerUserOperation({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    password,
  }: UserModel) {
    console.log({ firstName, lastName, emailAddress, phoneNumber, password });
  }
}
