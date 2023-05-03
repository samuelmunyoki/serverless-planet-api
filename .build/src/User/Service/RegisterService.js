"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const Responses_1 = require("../../Utils/Responses");
const UserRepository_1 = require("../Repository/UserRepository");
const class_transformer_1 = require("class-transformer");
const RegisterInput_1 = require("../Model/DTO/RegisterInput");
const Errors_1 = require("../../Utils/Errors");
const PasswordUtils_1 = require("../../Utils/PasswordUtils");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    registerUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = JSON.parse(event.body);
            const input = (0, class_transformer_1.plainToClass)(RegisterInput_1.RegisterInput, body);
            const errors = yield (0, Errors_1.ServiceValidation)(input);
            if (errors) {
                return (0, Responses_1.Response)(400, { Errors: errors });
            }
            // await this.repository.registerUserOperation();
            else {
                var salt = yield (0, PasswordUtils_1.generateSalt)(4);
                const hash = yield (0, PasswordUtils_1.generateHash)(input.password, salt);
                const userData = yield this.repository.registerUserOperation({
                    firstName: input.firstName,
                    lastName: input.lastName,
                    emailAddress: input.emailAddress,
                    phoneNumber: input.phoneNumber,
                    password: hash,
                });
                return (0, Responses_1.Response)(200, { Data: userData });
            }
        });
    }
};
UserService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [UserRepository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=RegisterService.js.map