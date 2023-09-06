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
exports.resetPasswordService = void 0;
const crypto_1 = require("crypto");
const data_source_1 = require("../../data-source");
const user_entitie_1 = require("../../entities/user.entitie");
const app_error_1 = require("../../errors/app.error");
const sendEmail_utils_1 = require("../../utils/sendEmail.utils");
const date_fns_1 = require("date-fns");
const resetPasswordService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const findUser = yield userRepository.findOneBy({ email: email });
    if (!findUser) {
        throw new app_error_1.AppError("There is no user registered with this email", 404);
    }
    const expirationDate = (0, date_fns_1.addMinutes)(new Date(), 5);
    const resetToken = (0, crypto_1.randomUUID)();
    const ResetUserPassword = Object.assign(Object.assign({}, findUser), { reset_token: resetToken, reset_token_expiration: expirationDate });
    const createReset = userRepository.create(ResetUserPassword);
    yield userRepository.save(createReset);
    const restPaswordTemplate = sendEmail_utils_1.emailService.resetPasswordTemplate(findUser.email, findUser.name, resetToken);
    yield sendEmail_utils_1.emailService.sendEmail(restPaswordTemplate);
});
exports.resetPasswordService = resetPasswordService;
