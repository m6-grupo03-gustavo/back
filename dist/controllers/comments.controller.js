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
exports.deleteCommentController = exports.updateCommentController = exports.listCommentController = exports.createCommentController = void 0;
const createComment_service_1 = require("../services/Comments/createComment.service");
const listComments_service_1 = require("../services/Comments/listComments.service");
const updateComment_service_1 = require("../services/Comments/updateComment.service");
const deleteComment_service_1 = require("../services/Comments/deleteComment.service");
const createCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const carId = parseInt(req.params.carId);
    const data = req.body;
    const comment = yield (0, createComment_service_1.createCommentService)(data, userId, carId);
    return res.status(201).json(comment);
});
exports.createCommentController = createCommentController;
const listCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = parseInt(req.params.carId);
    const comment = yield (0, listComments_service_1.listCommentsByCarService)(carId);
    return res.status(201).json(comment);
});
exports.listCommentController = listCommentController;
const updateCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const commentId = Number(req.params.commentId);
    const comment = yield (0, updateComment_service_1.updateCommentService)(data, commentId);
    return res.status(201).json(comment);
});
exports.updateCommentController = updateCommentController;
const deleteCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = Number(req.params.commentId);
    yield (0, deleteComment_service_1.deleteCommentService)(commentId);
    res.json().status(204);
});
exports.deleteCommentController = deleteCommentController;
