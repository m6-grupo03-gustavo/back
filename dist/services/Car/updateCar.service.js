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
exports.updateCarService = void 0;
const data_source_1 = require("../../data-source");
const car_entitie_1 = require("../../entities/car.entitie");
const updateCarService = (carId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const findCar = yield carRepository.findOneBy({ id: carId });
    const updatedCar = carRepository.create(Object.assign(Object.assign({}, findCar), data));
    const updatedCarData = yield carRepository.save(updatedCar);
    return updatedCarData;
});
exports.updateCarService = updateCarService;
