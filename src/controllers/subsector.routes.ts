import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import SubsectorService from '../services/subsector.service'

const subsectorService = new SubsectorService()
export const getsubSectors = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const subsector= await subsectorService.findAll()
      success(req, res, subsector)

 } catch (error) {
    next(error)
 }
}

export const getsubSector = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const subsector = await subsectorService.findOne(Number(req.params.id))
      success(req, res, subsector)

 } catch (error) {
    next(error)
 }
}

export const createsubSector = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const subsector = await subsectorService.create(req.body)
      success(req, res, subsector)

 } catch (error) {
    next(error)
 }
}

export const updatesubSector  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const subsector = await subsectorService.update(Number(req.params.id), req.body)
      success(req, res, subsector)

 } catch (error) {
    next(error)
 }
}

export const deletesubSector  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const subsector = await subsectorService.delete(Number(req.params.id))
      success(req, res, subsector)

 } catch (error) {
    next(error)
 }
}