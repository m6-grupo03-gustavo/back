import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/app.error";

export const ensureUserIsSeller = async ( req: Request, res: Response, next: NextFunction ) => {
    const userId = parseInt(res.locals.userId)
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id:userId})

    if(!findUser){
        throw new AppError("User not found",404)
    }

    if(findUser.account_state === "buyer"){
        throw new AppError("Invalid permission, you must be a seller",404)
    }

    return next()
};
