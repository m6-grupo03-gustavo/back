import { Request, Response } from "express";
import { updateCarService } from "../services/updateCar.service";
import { deleteCarService } from "../services/deleteCar.service";
import { ICarRequest } from "../interfaces/car.interface";
import { createCarService } from "../services/createCar.service";
import listCarService from "../services/listCar.service";
import listCarByIdService from "../services/listCarById.service";


const createCarController = async (
    req: Request,
    res: Response
  ) => {
    const carData: ICarRequest = req.body;
    const id = 1
    // const id: number = parseInt(res.locals.userId) //coloquei pois quand o usuário estiver logado sera pego o id atraves da criação do token
    const contact = await createCarService(carData, id);
    return res.status(201).json(contact);
};

const listCarsController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const listCars = await listCarService();
    return res.json(listCars);
  };

const listCarByIdController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = parseInt(req.params.id)
    const listCar = await listCarByIdService(id);
    return res.json(listCar);
  };


export{
    createCarController,
    listCarsController,
    listCarByIdController
} 


export const updateCarController = async (req:Request, res: Response) => {
    const carId = parseInt(req.params.id)

    const updateCar = await updateCarService(carId, req.body)

    return res.json(updateCar).status(200)
}

export const deleteCarController = async (req: Request, res: Response) => {
    const carId = parseInt(req.params.id)

    await deleteCarService(carId)

    res.json({}).status(204)
}