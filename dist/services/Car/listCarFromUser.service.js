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
exports.listCarFromUSerService = void 0;
const data_source_1 = require("../../data-source");
const car_entitie_1 = require("../../entities/car.entitie");
const listCarFromUSerService = ({ page, perPage, order, sort, prevPage, nextPage }, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.AppDataSource.getRepository(car_entitie_1.Car);
    const [cars, count] = yield carRepository.findAndCount({
        where: { user: { id: userId } },
        order: { [sort]: order },
        skip: page,
        take: perPage,
        relations: ["carImages"]
    });
    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: cars
    };
});
exports.listCarFromUSerService = listCarFromUSerService;
