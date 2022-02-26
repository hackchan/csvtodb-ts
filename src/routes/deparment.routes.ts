import { Router } from "express";
import {getDeparment, getDeparments, createDeparment, updateDeparment, deleteDeparment} from "../controllers/department.controller"
const router = Router()

router.get('/department', getDeparments)
router.get('/department/:id', getDeparment)
router.post('/department', createDeparment)
router.patch('/department/:id', updateDeparment)
router.delete('/department/:id', deleteDeparment)
export default router