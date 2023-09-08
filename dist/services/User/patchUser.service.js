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
exports.patchUserService = void 0;
const user_entitie_1 = require("../../entities/user.entitie");
const data_source_1 = require("../../data-source");
const app_error_1 = require("../../errors/app.error");
const user_schema_1 = require("../../schemas/user.schema");
const bcryptjs_1 = require("bcryptjs");
const patchUserService = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const validatedData = user_schema_1.userUpdateSchema.parse(data);
    const user = yield userRepository.findOne({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new app_error_1.AppError("User not found", 404);
    }
    if (data.password) {
        const hashedPassword = yield (0, bcryptjs_1.hash)(data.password, 10);
        user.password = hashedPassword;
    }
    const newUserData = userRepository.create(Object.assign(Object.assign({}, user), validatedData));
    yield userRepository.save(newUserData);
    const returnedUser = user_schema_1.userResponseSchema.parse(newUserData);
    return returnedUser;
});
exports.patchUserService = patchUserService;
