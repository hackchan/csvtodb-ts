import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import EntidadService from '../services/entidad.services'

const entidadService = new EntidadService()
export const getEntidades = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipos= await entidadService.findAll()
      success(req, res, tipos)

 } catch (error) {
    next(error)
 }
}

export const getEntidad = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await entidadService.findOne(Number(req.params.id))
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}

export const createEntidad = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await entidadService.create(req.body)
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}

export const updateEntidad= async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await entidadService.update(Number(req.params.id), req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const deleteEntidad  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const tipo = await entidadService.delete(Number(req.params.id))
      success(req, res, tipo)

 } catch (error) {
    next(error)
 }
}