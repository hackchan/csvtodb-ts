import { Router } from "express";
import {getTipousers,getTipouser,createTipouser,updateTipouser, deleteTipouser} from "../controllers/tipouser.controller"
const router = Router()

router.get('/', getTipousers)
router.get('/:id', getTipouser)
router.post('/', createTipouser)
router.patch('/:id', updateTipouser)
router.delete('/:id', deleteTipouser)
export default router