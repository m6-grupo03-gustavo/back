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
exports.createCarService = void 0;
const car_entitie_1 = require("../../entities/car.entitie");
const data_source_1 = require("../../data-source");
const car_image_entitie_1 = require("../../entities/car_image.entitie");
const createCarService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const carRespository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const carImageRepository = data_source_1.AppDataSource.getRepository(car_image_entitie_1.CarImages);
    const newData = Object.assign(Object.assign({}, data), { user: { id: userId } });
    const newCar = carRespository.create(newData);
    yield carRespository.save(newCar);
    const saveImage = data.carImages.map((image) => __awaiter(void 0, void 0, void 0, function* () {
        const carImage = carImageRepository.create({
            url: image.url,
            car: newCar
        });
        return carImageRepository.save(carImage);
    }));
    yield Promise.all(saveImage);
    const loadedCar = yield carRespository.findOne({
        where: {
            id: newCar.id
        },
        relations: ["carImages"]
    });
    return loadedCar;
});
exports.createCarService = createCarService;
