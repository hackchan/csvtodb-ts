import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import TipoentidadService from '../services/tipoentidad.service'

const tipoentidadService = new TipoentidadService()
export const getTipoentidades = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipos= await tipoentidadService.findAll()
      success(req, res, tipos)

 } catch (error) {
    next(error)
 }
}

export const getTipoentidad = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await tipoentidadService.findOne(Number(req.params.id))
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}

export const createTipoentidad = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await tipoentidadService.create(req.body)
      success(req, res, tipo)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updateTipoentidad  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await tipoentidadService.update(Number(req.params.id), req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const deleteTipoentidad  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await tipoentidadService.delete(Number(req.params.id))
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}