import { Router } from "express";
import {getTipousers,getTipouser,createTipouser,updateTipouser, deleteTipouser} from "../controllers/tipouser.controller"
const router = Router()

router.get('/tipouser', getTipousers)
router.get('/tipouser/:id', getTipouser)
router.post('/tipouser', createTipouser)
router.patch('/tipouser/:id', updateTipouser)
router.delete('/tipouser/:id', deleteTipouser)
export default router