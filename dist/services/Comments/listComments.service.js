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
exports.listCommentsByCarService = void 0;
const data_source_1 = require("../../data-source");
const car_user_comment_entities_1 = require("../../entities/car_user_comment.entities");
const app_error_1 = require("../../errors/app.error");
const car_entitie_1 = require("../../entities/car.entitie");
const listCommentsByCarService = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepository = data_source_1.AppDataSource.getRepository(car_user_comment_entities_1.CarUserComments);
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const findCar = yield carRepository.findOne({
        where: {
            id: carId,
        },
    });
    if (!findCar) {
        throw new app_error_1.AppError("Car not found", 404);
    }
    const commentsForCar = yield commentRepository
        .createQueryBuilder("comment")
        .leftJoin("comment.user", "user")
        .where("comment.car = :carId", { carId })
        .select([
        "comment.comment as comment",
        "comment.id as id",
        "comment.register_date as register_date",
        "user.id as userId",
        "user.name as userName"
    ])
        .getRawMany();
    return commentsForCar;
});
exports.listCommentsByCarService = listCommentsByCarService;
