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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entitie_1 = require("../../entities/user.entitie");
const user_schema_1 = require("../../schemas/user.schema");
const app_error_1 = require("../../errors/app.error");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const validatedData = user_schema_1.userRequestSchema.parse(data);
    const findUser = yield userRepository.findOne({
        where: {
            email: data.email,
        },
    });
    if (findUser) {
        throw new app_error_1.AppError("User already exists", 409);
    }
    const user = userRepository.create(validatedData);
    yield userRepository.save(user);
    const returnedUser = user_schema_1.userResponseSchema.parse(user);
    return returnedUser;
});
exports.createUserService = createUserService;
