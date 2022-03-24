import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import config from '../config'
const jwt = require('jsonwebtoken')

export const login = async ( req: Request, res: Response, next:NextFunction ) =>{
 try {
   const user:any = req.user
     const payload = {
         sub: user.id,
         role:user.auth.role
       }
       const token= jwt.sign(payload, config.api.jwt)
       success(req, res, {user, token})


  } catch (error) {
    next(error)
  }
 }