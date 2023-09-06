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
exports.deleteCarImageController = exports.createCarImageController = void 0;
const createCarImage_service_1 = require("../services/CarImage/createCarImage.service");
const deleteCarImage_service_1 = require("../services/CarImage/deleteCarImage.service");
const createCarImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = parseInt(req.params.id);
    const data = req.body;
    const newCarImage = yield (0, createCarImage_service_1.createCarImageService)(data, carId);
    return res.json(newCarImage).status(201);
});
exports.createCarImageController = createCarImageController;
const deleteCarImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = parseInt(req.params.id);
    const imageId = parseInt(req.params.imageId);
    yield (0, deleteCarImage_service_1.deleteCarImageService)(carId, imageId);
    return res.json({}).status(204);
});
exports.deleteCarImageController = deleteCarImageController;
