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
exports.resetUserPasswordController = exports.resetUserPasswordEmailController = exports.deleteUserController = exports.patchUserController = exports.getUserControllerById = exports.getUserController = exports.createUserController = void 0;
const createUser_service_1 = require("../services/User/createUser.service");
const getUserById_service_1 = require("../services/User/getUserById.service");
const patchUser_service_1 = require("../services/User/patchUser.service");
const deletUser_service_1 = require("../services/User/deletUser.service");
const resetEmail_service_1 = require("../services/User/resetEmail.service");
const resetPassword_service_1 = require("../services/User/resetPassword.service");
const getUser_service_1 = require("../services/User/getUser.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, createUser_service_1.createUserService)(req.body);
    return res.status(201).json(user);
});
exports.createUserController = createUserController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, getUser_service_1.getUserService)();
    return res.status(200).json(user);
});
exports.getUserController = getUserController;
const getUserControllerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    const user = yield (0, getUserById_service_1.getUserByIdService)(userId);
    return res.status(200).json(user);
});
exports.getUserControllerById = getUserControllerById;
const patchUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    const user = yield (0, patchUser_service_1.patchUserService)(userId, req.body);
    return res.status(200).json(user);
});
exports.patchUserController = patchUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    yield (0, deletUser_service_1.deletUserService)(userId);
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
const resetUserPasswordEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    yield (0, resetEmail_service_1.resetPasswordService)(email);
    res.json({ message: "Look at your email account" });
});
exports.resetUserPasswordEmailController = resetUserPasswordEmailController;
const resetUserPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resetToken = req.params.token;
    const password = req.body.password;
    console.log(resetToken, password);
    yield (0, resetPassword_service_1.resetUserPasswordService)(resetToken, password);
    res.json({ message: "Your password has been change." });
});
exports.resetUserPasswordController = resetUserPasswordController;
