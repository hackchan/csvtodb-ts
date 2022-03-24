import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import DeparmentService from '../services/department.service'

const deparmentService = new DeparmentService()

export const getDeparments = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Deparments= await deparmentService.findAll()
      success(req, res, Deparments)

 } catch (error) {
    next(error)
 }
}

export const getDeparment = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Deparment = await deparmentService.findOne(Number(req.params.id))
      success(req, res, Deparment)

 } catch (error) {
    next(error)
 }
}

export const createDeparment = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Deparment = await deparmentService.create(req.body)
      success(req, res, Deparment)

 } catch (error) {
    next(error)
 }
}

export const updateDeparment = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Deparment = await deparmentService.update(Number(req.params.id), req.body)
      success(req, res, Deparment)

 } catch (error) {
    next(error)
 }
}

export const deleteDeparment = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const Deparment = await deparmentService.delete(Number(req.params.id))
      success(req, res, Deparment)

 } catch (error) {
    next(error)
 }
}