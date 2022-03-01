import { Router } from "express";
import {getTipoentidades,getTipoentidad,createTipoentidad,updateTipoentidad, deleteTipoentidad} from "../controllers/tipoentidad.controller"
const router = Router()

router.get('/tipoentidad', getTipoentidades)
router.get('/tipoentidad/:id', getTipoentidad)
router.post('/tipoentidad', createTipoentidad)
router.patch('/tipoentidad/:id', updateTipoentidad)
router.delete('/tipoentidad/:id', deleteTipoentidad)
export default router 