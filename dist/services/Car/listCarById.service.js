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
exports.listCarByIdService = void 0;
const car_entitie_1 = require("../../entities/car.entitie");
const data_source_1 = require("../../data-source");
const car_schema_1 = require("../../schemas/car.schema");
const listCarByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const car = yield carRepository.findOne({
        where: {
            id: id
        },
        relations: ["carImages", "user"]
    });
    const carResponse = car_schema_1.carResponseSchema.parse(car);
    return carResponse;
});
exports.listCarByIdService = listCarByIdService;
