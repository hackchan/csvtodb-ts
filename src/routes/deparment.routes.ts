import { Router } from "express";
import passport from "passport";
import {getDeparment, getDeparments, createDeparment, updateDeparment, deleteDeparment} from "../controllers/department.controller"
import {checkApiKey,checkRoles} from '../middlewares/auth'
const router = Router()

router.get('/department',
passport.authenticate('jwt',{session:false}),
checkRoles('admin','ssj') ,getDeparments)
router.get('/department/:id', getDeparment)
router.post('/department', createDeparment)
router.patch('/department/:id', updateDeparment)
router.delete('/department/:id', deleteDeparment)
export default router