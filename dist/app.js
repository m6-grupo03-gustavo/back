"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const handleAppError_1 = require("./errors/handleAppError");
const car_routes_1 = require("./routes/car.routes");
const login_routes_1 = require("./routes/login.routes");
const user_routes_1 = require("./routes/user.routes");
const comments_routes_1 = require("./routes/comments.routes");
exports.app = (0, express_1.default)();
// "Ligação" do Front com o Back
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({
    origin: process.env.URL_FROM_FRONT,
}));
exports.app.use("/login", login_routes_1.loginRoutes);
exports.app.use("/user", user_routes_1.userRoutes);
exports.app.use("/car", car_routes_1.CarRouter);
exports.app.use("/comments", comments_routes_1.commentsRoutes);
exports.app.use(handleAppError_1.handlerAppError);
