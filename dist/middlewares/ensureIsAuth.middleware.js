"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureIsAuthMiddleware = void 0;
const app_error_1 = require("../errors/app.error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureIsAuthMiddleware = (req, res, next) => {
    const headersToken = req.headers.authorization;
    if (!headersToken) {
        throw new app_error_1.AppError("Missing berear token", 401);
    }
    const token = headersToken.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: "invalid credentials" });
        }
        res.locals.userId = decoded.sub;
        return next();
    });
};
exports.ensureIsAuthMiddleware = ensureIsAuthMiddleware;
