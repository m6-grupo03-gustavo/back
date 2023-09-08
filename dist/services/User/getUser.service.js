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
exports.getUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entitie_1 = require("../../entities/user.entitie");
const user_schema_1 = require("../../schemas/user.schema");
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
    const user = yield userRepository.find();
    const returnedUser = user_schema_1.usersResponseSchema.parse(user);
    return returnedUser;
});
exports.getUserService = getUserService;
