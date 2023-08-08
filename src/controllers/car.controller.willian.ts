import { Request, Response } from "express";
import { updateCarService } from "../services/updateCar.service";
import { deleteCarService } from "../services/deleteCar.service";


export const updateCarController = async (req:Request, res: Response) => {
    const carId = parseInt(req.params.id)

    const updateCar = await updateCarService(carId, req.body)

    return res.json({updateCar}).status(200)
}

export const deleteCarController = async (req: Request, res: Response) => {
    const carId = parseInt(req.params.id)

    await deleteCarService(carId)

    res.json({}).status(204)
}