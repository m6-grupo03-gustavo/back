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
exports.createCarImageService = void 0;
const data_source_1 = require("../../data-source");
const car_entitie_1 = require("../../entities/car.entitie");
const car_image_entitie_1 = require("../../entities/car_image.entitie");
const car_image_schema_1 = require("../../schemas/car_image.schema");
const createCarImageService = (data, carId) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const carImageRepository = data_source_1.AppDataSource.getRepository(car_image_entitie_1.CarImages);
    const findCar = yield carRepository.findOneBy({ id: carId });
    const newImgData = Object.assign(Object.assign({}, data), { car: findCar });
    const createCarImage = carImageRepository.create(newImgData);
    yield carImageRepository.save(createCarImage);
    const response = {
        id: createCarImage.id,
        url: createCarImage.url,
        carId: findCar.id
    };
    return car_image_schema_1.carImageResponseSchema.parse(response);
});
exports.createCarImageService = createCarImageService;
