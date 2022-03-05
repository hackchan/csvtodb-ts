import { Router } from "express";
import {getTelefonos,getTelefono,createTelefono,updateTelefono,deleteTelefono} from "../controllers/telefono.controller"
const router = Router()

router.get('/telefono', getTelefonos)
router.get('/telefono/:id', getTelefono)
router.post('/telefono', createTelefono)
router.patch('/telefono/:id', updateTelefono)
router.delete('/telefono/:id', deleteTelefono)
export default router