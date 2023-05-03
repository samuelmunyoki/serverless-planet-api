import { APIGatewayEvent } from "aws-lambda";
import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import { UserService } from "./Service/RegisterService";
import { container } from "tsyringe";

const userService = container.resolve(UserService);
export const UserRegistrationHandler = middy(async (event: APIGatewayEvent) => {
  return userService.registerUser(event);
})
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser());
