import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import config from '../config'
import AuthService from '../services/auth.service'
const authService = new AuthService()
const jwt = require('jsonwebtoken')
export const getAuths= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const auths= await authService.findAll()
      success(req, res, auths)

 } catch (error) {
    next(error)
 }
}

export const getAuth= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const auth = await authService.findOne(Number(req.params.id))
      success(req, res, auth)

 } catch (error) {
    next(error)
 }
}

export const createAuth= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const auth = await authService.create(req.body)
      success(req, res, auth)

 } catch (error) {
    next(error)
 }
}

export const updateAuth = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const auth = await authService.update(Number(req.params.id), req.body)
      success(req, res, auth)

 } catch (error) {
    next(error)
 }
}

export const deleteAuth = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const auth = await authService.delete(Number(req.params.id))
      success(req, res, auth)

 } catch (error) {
    next(error)
 }
}

// export const loginAuth = async ( req: Request, res: Response, next:NextFunction ) =>{
//   try {
//     const user:any = req.user
//     const payload = {
//         sub: user.id,
//         role:user.auth.role
//       }
//       const token= jwt.sign(payload, config.api.jwt)
//       success(req, res, {user, token})


//  } catch (error) {
//     next(error)
//  }
// }