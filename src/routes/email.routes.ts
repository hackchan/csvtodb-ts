import { Router } from "express";
import {getEmails,getEmail,createEmail,updateEmail,deleteEmail} from "../controllers/email.controller"
const router = Router()

router.get('/email', getEmails)
router.get('/email/:id', getEmail)
router.post('/email', createEmail)
router.patch('/email/:id', updateEmail)
router.delete('/email/:id', deleteEmail)
export default router