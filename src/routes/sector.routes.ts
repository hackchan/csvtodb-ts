import { Router } from "express";
import {getSectors, createSector,getSector,updateSector,deleteSector} from "../controllers/sector.routes"
import {checkApiKey} from '../middlewares/auth'
const router = Router()

router.get('/sector',checkApiKey, getSectors)
router.get('/sector/:id', getSector)
router.post('/sector', createSector)
router.patch('/sector/:id', updateSector)
router.delete('/sector/:id', deleteSector)
export default router