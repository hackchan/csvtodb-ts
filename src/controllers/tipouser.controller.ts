import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import TipoUserService from "../services/tipouser.service";

const tipouserervice = new TipoUserService()
export const getTipousers = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipos= await tipouserervice.findAll()
      success(req, res, tipos)

 } catch (error) {
    next(error)
 }
}

export const getTipouser = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await tipouserervice.findOne(Number(req.params.id))
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}

export const createTipouser = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await tipouserervice.create(req.body)
      success(req, res, tipo)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updateTipouser  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await tipouserervice.update(Number(req.params.id), req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const deleteTipouser  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await tipouserervice.delete(Number(req.params.id))
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}