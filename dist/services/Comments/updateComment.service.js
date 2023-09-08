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
exports.updateCommentService = void 0;
const car_user_comment_entities_1 = require("../../entities/car_user_comment.entities");
const data_source_1 = require("../../data-source");
const app_error_1 = require("../../errors/app.error");
const updateCommentService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepository = data_source_1.AppDataSource.getRepository(car_user_comment_entities_1.CarUserComments);
    const comment = yield commentRepository.findOne({
        where: {
            id: id,
        },
    });
    if (!comment) {
        throw new app_error_1.AppError("Comment not found", 404);
    }
    const newCommentData = commentRepository.create(Object.assign(Object.assign({}, comment), data));
    yield commentRepository.save(newCommentData);
    return newCommentData;
});
exports.updateCommentService = updateCommentService;
