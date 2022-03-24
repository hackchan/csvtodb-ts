import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'


export const getProfile = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
    success(req, res, {})

 } catch (error) {
    next(error)
 }
}

