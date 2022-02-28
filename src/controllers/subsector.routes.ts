import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import SubsectorService from '../services/subsector.service'

const subsectorService = new SubsectorService()
export const getsubSectors = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const users= await subsectorService.findAll()
      success(req, res, users)

 } catch (error) {
    next(error)
 }
}

export const getsubSector = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await subsectorService.findOne(Number(req.params.id))
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const createsubSector = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await subsectorService.create(req.body)
      console.log('user:', user)
      success(req, res, user)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updatesubSector  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await subsectorService.update(Number(req.params.id), req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const deletesubSector  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
       const user = await subsectorService.delete(Number(req.params.id))
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}