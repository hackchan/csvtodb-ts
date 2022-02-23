import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import AuthService from '../services/auth.service'

const authService = new AuthService()
export const getAuths= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const users= await authService.findAll()
      success(req, res, users)

 } catch (error) {
    next(error)
 }
}

export const getAuth= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await authService.findOne(Number(req.params.id))
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const createAuth= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await authService.create(req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const updateAuth = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await authService.update(Number(req.params.id), req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const deleteAuth = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await authService.delete(Number(req.params.id))
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}