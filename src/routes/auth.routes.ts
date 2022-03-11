import { Router } from "express";
import {getAuths, createAuth,getAuth,updateAuth,deleteAuth,loginAuth} from "../controllers/auth.controller"
import {checkApiKey} from '../middlewares/auth'
import passport from "passport";
const router = Router()
// import validatorHandler from '../middlewares/validator'
// import {Auth} from '../entity/Auth'
router.get('/auth', getAuths)
router.get('/auth/:id', getAuth)
router.post('/auth',checkApiKey, createAuth)
router.patch('/auth/:id', updateAuth)
router.delete('/auth/:id', deleteAuth)

router.post('/auth/login',passport.authenticate('local',{session:false}), loginAuth)
export default router