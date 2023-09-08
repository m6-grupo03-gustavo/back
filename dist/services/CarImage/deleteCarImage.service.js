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
exports.deleteCarImageService = void 0;
const data_source_1 = require("../../data-source");
const car_entitie_1 = require("../../entities/car.entitie");
const car_image_entitie_1 = require("../../entities/car_image.entitie");
const app_error_1 = require("../../errors/app.error");
const deleteCarImageService = (carId, imageId) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const carImageRepository = data_source_1.AppDataSource.getRepository(car_image_entitie_1.CarImages);
    const findCar = yield carRepository.findOne({
        where: {
            id: carId
        },
        relations: ["carImages"]
    });
    const carImagesArr = findCar === null || findCar === void 0 ? void 0 : findCar.carImages;
    const findInArr = carImagesArr === null || carImagesArr === void 0 ? void 0 : carImagesArr.find(image => image.id === imageId);
    if (!findInArr) {
        throw new app_error_1.AppError("Image not found", 404);
    }
    const findImage = yield carImageRepository.findOneBy({ id: imageId });
    if (!findImage) {
        throw new app_error_1.AppError("Image not found", 404);
    }
    carImageRepository.remove(findImage);
});
exports.deleteCarImageService = deleteCarImageService;
