import { Router } from "express";
import {getAuths, createAuth,getAuth,updateAuth,deleteAuth} from "../controllers/auth.controller"
const router = Router()
// import validatorHandler from '../middlewares/validator'
// import {Auth} from '../entity/Auth'
router.get('/auth', getAuths)
router.get('/auth/:id', getAuth)
router.post('/auth', createAuth)
router.patch('/auth/:id', updateAuth)
router.delete('/auth/:id', deleteAuth)
export default router