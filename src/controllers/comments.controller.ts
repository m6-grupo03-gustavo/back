import { Request, Response } from "express";
import { createCommentService } from "../services/Comments/createComment.service";
import { ICommentRequest } from "../interfaces/comment.interface";
import { listCommentsByCarService } from "../services/Comments/listComments.service";
import { updateCommentService } from "../services/Comments/updateComment.service";
import { deleteCommentService } from "../services/Comments/deleteComment.service";

export const createCommentController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userId: number = res.locals.userId
    const carId: number = parseInt(req.params.carId)
    const data: ICommentRequest = req.body 
    const comment = await createCommentService(data, userId, carId);
    return res.status(201).json(comment);
  };

  export const listCommentController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const carId: number = parseInt(req.params.carId)
    const comment = await listCommentsByCarService( carId);
    return res.status(201).json(comment);
  };

  export const updateCommentController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const data = req.body
    const commentId: number = Number(req.params.commentId)
    const comment = await updateCommentService(data, commentId);
    return res.status(201).json(comment);
  };

  export const deleteCommentController = async (
    req: Request,
    res: Response
  ) => {
    const commentId: number = Number(req.params.commentId)
    await deleteCommentService(commentId);
    res.json().status(204);
  };

