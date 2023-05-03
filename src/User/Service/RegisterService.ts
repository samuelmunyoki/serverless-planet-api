import "reflect-metadata";
import { APIGatewayEvent } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { Response } from "../../Utils/Responses";
import { UserRepository } from "../Repository/UserRepository";
import { plainToClass } from "class-transformer";
import { RegisterInput } from "../Model/DTO/RegisterInput";
import { ServiceValidation } from "../../Utils/Errors";
import { generateSalt, generateHash } from "../../Utils/PasswordUtils";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }
  async registerUser(event: APIGatewayEvent) {
    const body = JSON.parse(event.body);
    const input = plainToClass(RegisterInput, body);
    const errors = await ServiceValidation(input);
    if (errors) {
      return Response(400, { Errors: errors });
    }
    // await this.repository.registerUserOperation();
    else {
      var salt = await generateSalt(4);
      const hash = await generateHash(input.password, salt);
      const userData = await this.repository.registerUserOperation({
        firstName: input.firstName,
        lastName: input.lastName,
        emailAddress: input.emailAddress,
        phoneNumber: input.phoneNumber,
        password: hash,
      });
      return Response(200, { Data: userData });
    }
    
  }
}
