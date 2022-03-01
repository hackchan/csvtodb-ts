import { Router } from "express";
import {getEntidades, getEntidad,createEntidad,updateEntidad,deleteEntidad} from "../controllers/entidad.controller"
const router = Router()

router.get('/entidad', getEntidades)
router.get('/entidad/:id', getEntidad)
router.post('/entidad', createEntidad)
router.patch('/entidad/:id', updateEntidad)
router.delete('/entidad/:id', deleteEntidad)
export default router