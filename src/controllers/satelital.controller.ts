import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import SaltelitalService from '../services/satelital.service'

const saltelitalService = new SaltelitalService()
export const getSaltelitals = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Saltelitals= await saltelitalService.findAll()
      success(req, res, Saltelitals)

 } catch (error) {
    next(error)
 }
}

export const getSaltelital = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Saltelital = await saltelitalService.findOne(Number(req.params.id))
      success(req, res, Saltelital)

 } catch (error) {
    next(error)
 }
}

export const createSaltelital = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Saltelital = await saltelitalService.create(req.body)
      success(req, res, Saltelital)

 } catch (error) {
    next(error)
 }
}

export const updateSaltelital = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Saltelital = await saltelitalService.update(Number(req.params.id), req.body)
      success(req, res, Saltelital)

 } catch (error) {
    next(error)
 }
}

export const deleteSaltelital = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Saltelital = await saltelitalService.delete(Number(req.params.id))
      success(req, res, Saltelital)

 } catch (error) {
    next(error)
 }
}