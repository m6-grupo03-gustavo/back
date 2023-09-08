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
exports.resetUserPasswordService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../data-source");
const user_entitie_1 = require("../../entities/user.entitie");
const app_error_1 = require("../../errors/app.error");
const resetUserPasswordService = (resetToken, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const findUser = yield userRepository.findOne({
        where: {
            reset_token: resetToken
        }
    });
    if (!findUser) {
        throw new app_error_1.AppError("User not found or token already expired.", 404);
    }
    if (findUser.reset_token_expiration > new Date() === true) {
        const passwordMatch = yield (0, bcryptjs_1.compare)(newPassword, findUser.password);
        if (passwordMatch) {
            throw new app_error_1.AppError("Your new password must be different from the first one.", 403);
        }
        findUser.reset_token = null;
        const addNewPassword = userRepository.create(Object.assign(Object.assign({}, findUser), { password: newPassword }));
        yield userRepository.save(addNewPassword);
    }
    else {
        throw new app_error_1.AppError("Your token already expired.", 403);
    }
});
exports.resetUserPasswordService = resetUserPasswordService;
