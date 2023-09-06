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
exports.deleteCarController = exports.updateCarController = exports.listCarFromUserController = exports.listCarByIdController = exports.listCarsController = exports.createCarController = void 0;
const updateCar_service_1 = require("../services/Car/updateCar.service");
const deleteCar_service_1 = require("../services/Car/deleteCar.service");
const createCar_service_1 = require("../services/Car/createCar.service");
const listCar_service_1 = require("../services/Car/listCar.service");
const listCarById_service_1 = require("../services/Car/listCarById.service");
const listCarFromUser_service_1 = require("../services/Car/listCarFromUser.service");
const createCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carData = req.body;
    const id = parseInt(res.locals.userId);
    const contact = yield (0, createCar_service_1.createCarService)(carData, id);
    return res.status(201).json(contact);
});
exports.createCarController = createCarController;
const listCarsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCars = yield (0, listCar_service_1.listCarService)(res.locals.pagination);
    return res.json(listCars);
});
exports.listCarsController = listCarsController;
const listCarByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const listCar = yield (0, listCarById_service_1.listCarByIdService)(id);
    return res.json(listCar);
});
exports.listCarByIdController = listCarByIdController;
const listCarFromUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(res.locals.userId);
    const listCars = yield (0, listCarFromUser_service_1.listCarFromUSerService)(res.locals.pagination, userId);
    return res.json(listCars);
});
exports.listCarFromUserController = listCarFromUserController;
const updateCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = parseInt(req.params.id);
    const updateCar = yield (0, updateCar_service_1.updateCarService)(carId, req.body);
    return res.json(updateCar).status(201);
});
exports.updateCarController = updateCarController;
const deleteCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = parseInt(req.params.id);
    yield (0, deleteCar_service_1.deleteCarService)(carId);
    res.json({}).status(204);
});
exports.deleteCarController = deleteCarController;
