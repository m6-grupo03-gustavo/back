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
exports.ensureUserIsSeller = void 0;
const data_source_1 = require("../data-source");
const user_entitie_1 = require("../entities/user.entitie");
const app_error_1 = require("../errors/app.error");
const ensureUserIsSeller = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(res.locals.userId);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const findUser = yield userRepository.findOneBy({ id: userId });
    if (!findUser) {
        throw new app_error_1.AppError("User not found", 404);
    }
    if (findUser.account_state === "buyer") {
        throw new app_error_1.AppError("Invalid permission, you must be a seller", 403);
    }
    return next();
});
exports.ensureUserIsSeller = ensureUserIsSeller;
