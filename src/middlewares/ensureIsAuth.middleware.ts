import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const ensureIsAuthMiddleware = ( req: Request, res: Response, next: NextFunction ) =>{
    const headersToken= req.headers.authorization

    if(!headersToken){
        throw new AppError("Missing berear token",401)
    }

    const token = headersToken.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if(error){
            return res.status(401).json({message: "invalid credentials"})
        }
        res.locals.userId = decoded.sub

        return next()
    })

}