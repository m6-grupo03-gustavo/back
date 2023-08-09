import { Request, Response } from "express";
import { createCarImageService } from "../services/CarImage/createCarImage.service";
import { deleteCarImageService } from "../services/CarImage/deleteCarImage.service";

export const createCarImageController = async (req:Request, res:Response) => {
    const carId = parseInt(req.params.id)
    const data = req.body
    const newCarImage = await createCarImageService(data, carId)

    return res.json(newCarImage).status(201)
}
export const deleteCarImageController = async (req:Request, res:Response) => {
    const carId = parseInt(req.params.id) 
    const imageId = parseInt(req.params.imageId) 

    await deleteCarImageService(carId, imageId)

    return res.json({}).status(204)
}