import { Router } from "express";
import {getsubSectors, getsubSector,createsubSector,updatesubSector,deletesubSector} from "../controllers/subsector.routes"
const router = Router()

router.get('/subsector', getsubSectors)
router.get('/subsector/:id', getsubSector)
router.post('/subsector', createsubSector)
router.patch('/subsector/:id', updatesubSector)
router.delete('/subsector/:id', deletesubSector)
export default router