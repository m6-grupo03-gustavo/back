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
exports.ensureIsUserOwner = void 0;
const data_source_1 = require("../data-source");
const user_entitie_1 = require("../entities/user.entitie");
const car_entitie_1 = require("../entities/car.entitie");
const app_error_1 = require("../errors/app.error");
const car_user_comment_entities_1 = require("../entities/car_user_comment.entities");
const ensureIsUserOwner = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.baseUrl === "/car") {
        const userId = parseInt(res.locals.userId);
        const carId = parseInt(req.params.id);
        const userRepository = data_source_1.AppDataSource.getRepository(user_entitie_1.User);
        const findUSer = yield userRepository.findOneBy({ id: userId });
        const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
        const findCar = yield carRepository.findOne({
            where: {
                id: carId,
            },
            relations: ["user"],
        });
        if ((findCar === null || findCar === void 0 ? void 0 : findCar.user.id) !== findUSer.id) {
            throw new app_error_1.AppError("You must be user owner", 403);
        }
        return next();
    }
    else if (req.baseUrl === "/user") {
        const userTokenId = parseInt(res.locals.userId);
        const userParamsId = parseInt(req.params.id);
        if (userTokenId !== userParamsId) {
            throw new app_error_1.AppError("You must be user owner", 403);
        }
        return next();
    }
    else if (req.baseUrl === "/comments") {
        const userTokenId = parseInt(res.locals.userId);
        const id = parseInt(req.params.commentId);
        const commentRepository = data_source_1.AppDataSource.getRepository(car_user_comment_entities_1.CarUserComments);
        const comment = yield commentRepository.findOne({
            where: {
                id: id,
            },
        });
        if (userTokenId !== Number(comment === null || comment === void 0 ? void 0 : comment.user)) {
            throw new app_error_1.AppError("You must be user owner", 403);
        }
        return next();
    }
});
exports.ensureIsUserOwner = ensureIsUserOwner;
