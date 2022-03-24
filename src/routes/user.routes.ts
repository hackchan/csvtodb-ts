import { Router } from "express";
import passport from "passport";
import {checkApiKey,checkRoles} from '../middlewares/auth'
import {getUsers, createUser,getUser,updateUser,deleteUser} from "../controllers/user.controller"
const router = Router()

router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)
export default router