"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationHandler = void 0;
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const http_header_normalizer_1 = __importDefault(require("@middy/http-header-normalizer"));
const RegisterService_1 = require("./Service/RegisterService");
const tsyringe_1 = require("tsyringe");
const userService = tsyringe_1.container.resolve(RegisterService_1.UserService);
exports.UserRegistrationHandler = (0, core_1.default)((event) => __awaiter(void 0, void 0, void 0, function* () {
    return userService.registerUser(event);
}))
    .use((0, http_header_normalizer_1.default)())
    .use((0, http_json_body_parser_1.default)());
//# sourceMappingURL=RegisterFunction.js.map