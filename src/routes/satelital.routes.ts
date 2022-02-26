import { Router } from "express";
import {getSaltelital, getSaltelitals, createSaltelital, updateSaltelital, deleteSaltelital} from "../controllers/satelital.controller"
const router = Router()

router.get('/satelital', getSaltelitals)
router.get('/satelital/:id', getSaltelital)
router.post('/satelital', createSaltelital)
router.patch('/satelital/:id', updateSaltelital)
router.delete('/satelital/:id', deleteSaltelital)
export default router