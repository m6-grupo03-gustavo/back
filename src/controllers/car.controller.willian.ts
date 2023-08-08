import { Request, Response } from "express";
import { deleteCarService } from "../services/deleteCar.Service";

export const deleteUserController = async (req: Request, res: Response) => {
    const carId = parseInt(req.params.id)

    await deleteCarService(carId)

    res.status(204).json({})
}