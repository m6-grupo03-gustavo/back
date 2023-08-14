import { Request, Response } from "express";
import { updateCarService } from "../services/Car/updateCar.service";
import { deleteCarService } from "../services/Car/deleteCar.service";
import { ICarRequest } from "../interfaces/car.interface";
import { createCarService } from "../services/Car/createCar.service";
import {listCarService} from "../services/Car/listCar.service";
import {listCarByIdService} from "../services/Car/listCarById.service";
import { Pagination } from "../interfaces/pagination.interface";


export const createCarController = async (
    req: Request,
    res: Response
  ) => {
    const carData: ICarRequest = req.body;
    const id = 1
    // const id: number = parseInt(res.locals.userId) //coloquei pois quand o usuário estiver logado sera pego o id atraves da criação do token
    const contact = await createCarService(carData, id);
    return res.status(201).json(contact);
};

export const listCarsController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const listCars: Pagination = await listCarService(res.locals.pagination);
    return res.json(listCars);
  };

export const listCarByIdController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = parseInt(req.params.id)
    const listCar = await listCarByIdService(id);
    return res.json(listCar);
  };


export const updateCarController = async (req:Request, res: Response) => {
    const carId = parseInt(req.params.id)

    const updateCar = await updateCarService(carId, req.body)

    return res.json(updateCar).status(201)
}

export const deleteCarController = async (req: Request, res: Response) => {
    const carId = parseInt(req.params.id)

    await deleteCarService(carId)

    res.json({}).status(204)
}