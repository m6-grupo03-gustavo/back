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
exports.createTokenService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../data-source");
const user_entitie_1 = require("../../entities/user.entitie");
const app_error_1 = require("../../errors/app.error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createTokenService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const user = yield userRepository.findOne({
        where: {
            email: data.email,
        },
    });
    if (!user) {
        throw new app_error_1.AppError("Invalid credentials", 403);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(data.password, user.password);
    if (!passwordMatch) {
        throw new app_error_1.AppError("Invalid credentials", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        userEmail: user.email,
        userName: user.name,
    }, process.env.SECRET_KEY, { expiresIn: "24h", subject: user.id.toString() });
    return token;
});
exports.createTokenService = createTokenService;
