import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import TelefonoService from '../services/telefonos.service'

const telefonoService = new TelefonoService()
export const getTelefonos = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const telefono= await telefonoService.findAll()
      success(req, res, telefono)

 } catch (error) {
    next(error)
 }
}

export const getTelefono = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const telefono = await telefonoService.findOne(Number(req.params.id))
      success(req, res, telefono)

 } catch (error) {
    next(error)
 }
}

export const createTelefono = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const telefono = await telefonoService.create(req.body)
      success(req, res, telefono)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updateTelefono  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const telefono = await telefonoService.update(Number(req.params.id), req.body)
      success(req, res, telefono)

 } catch (error) {
    next(error)
 }
}

export const deleteTelefono  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const telefono = await telefonoService.delete(Number(req.params.id))
      success(req, res, telefono)

 } catch (error) {
    next(error)
 }
}