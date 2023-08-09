import { Response, Request } from "express";
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