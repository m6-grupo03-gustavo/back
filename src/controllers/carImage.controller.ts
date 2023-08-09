import { Request, Response } from "express";
import { createCarImageService } from "../services/createCarImage.service";

export const createCarImageController = async (req:Request, res:Response) => {
    const data = req.body
    const newCarImage = await createCarImageService(data)
}
export const deleteCarImageController = async (req:Request, res:Response) => {

}