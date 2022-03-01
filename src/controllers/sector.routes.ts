import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import SectorService from '../services/sector.service'

const sectorService = new SectorService()
export const getSectors = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const sector= await sectorService.findAll()
      success(req, res, sector)

 } catch (error) {
    next(error)
 }
}

export const getSector = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const sector = await sectorService.findOne(Number(req.params.id))
      success(req, res, sector)

 } catch (error) {
    next(error)
 }
}

export const createSector = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const sector = await sectorService.create(req.body)
      success(req, res, sector)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updateSector  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const sector = await sectorService.update(Number(req.params.id), req.body)
      success(req, res, sector)

 } catch (error) {
    next(error)
 }
}

export const deleteSector  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const sector = await sectorService.delete(Number(req.params.id))
      success(req, res, sector)

 } catch (error) {
    next(error)
 }
}