import { Request, Response, NextFunction } from "express";
import {success} from '../utils/response'
import UserService from '../services/user.service'

const userService = new UserService()
export const getUsers = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const users= await userService.findAll()
      success(req, res, users)

 } catch (error) {
    next(error)
 }
}

export const getUser = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await userService.findOne(Number(req.params.id))
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const createUser = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
      const user = await userService.create(req.body)
      console.log('user:', user)
      success(req, res, user)

 } catch (error) {
    console.log('test:', error)
    next(error)
 }
}

export const updateUser = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
       const user = await userService.update(Number(req.params.id), req.body)
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}

export const deleteUser = async ( req: Request, res: Response, next:NextFunction ) =>{
  try {
       const user = await userService.delete(Number(req.params.id))
      success(req, res, user)

 } catch (error) {
    next(error)
 }
}