"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
exports.loginRoutes = (0, express_1.Router)();
exports.loginRoutes.post("", login_controller_1.createTokenController);
