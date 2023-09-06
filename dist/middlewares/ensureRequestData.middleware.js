"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsureRequestData = void 0;
const EnsureRequestData = (schema) => (req, res, next) => {
    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    return next();
};
exports.EnsureRequestData = EnsureRequestData;
