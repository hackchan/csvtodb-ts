import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import EmailService from '../services/emails.service'

const emailService = new EmailService()
export const getEmails = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const email= await emailService.findAll()
      success(req, res, email)

 } catch (error) {
    next(error)
 }
}

export const getEmail = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const email = await emailService.findOne(Number(req.params.id))
      success(req, res, email)

 } catch (error) {
    next(error)
 }
}

export const createEmail = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const email = await emailService.create(req.body)
      success(req, res, email)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updateEmail  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const email = await emailService.update(Number(req.params.id), req.body)
      success(req, res, email)

 } catch (error) {
    next(error)
 }
}

export const deleteEmail  = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const email = await emailService.delete(Number(req.params.id))
      success(req, res, email)

 } catch (error) {
    next(error)
 }
}