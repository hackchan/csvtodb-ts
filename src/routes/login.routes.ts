import { Router } from "express";
import {login} from "../controllers/login.controller"
import {checkApiKey} from '../middlewares/auth'
import passport from "passport";
const   router = Router()



router.post('/',passport.authenticate('local',{session:false}), login)

export default router