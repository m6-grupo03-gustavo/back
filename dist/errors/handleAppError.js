"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerAppError = void 0;
const app_error_1 = require("./app.error");
const zod_1 = require("zod");
const handlerAppError = (error, req, res, _) => {
    if (error instanceof app_error_1.AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
    }
    return res.status(500).json({ message: "internal server error" });
};
exports.handlerAppError = handlerAppError;
