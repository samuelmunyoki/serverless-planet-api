import { APIGatewayEvent, Handler } from "aws-lambda";
import { Response } from "./Utils/Responses";

export const handler: Handler = async (event: APIGatewayEvent) => {
  return Response(200, { message: "Hit The API Endpoint." });
};
