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
exports.deleteCarService = void 0;
const data_source_1 = require("../../data-source");
const car_entitie_1 = require("../../entities/car.entitie");
const app_error_1 = require("../../errors/app.error");
const deleteCarService = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const findCar = yield carRepository.findOneBy({ id: carId });
    if (!findCar) {
        throw new app_error_1.AppError("Car not found", 404);
    }
    carRepository.remove(findCar);
});
exports.deleteCarService = deleteCarService;
