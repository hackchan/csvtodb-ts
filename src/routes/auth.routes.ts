import { Router } from "express";
import {getAuths, createAuth,getAuth,updateAuth,deleteAuth} from "../controllers/auth.controller"
import {checkApiKey} from '../middlewares/auth'
import passport from "passport";
const   router = Router()
// import validatorHandler from '../middlewares/validator'
// import {Auth} from '../entity/Auth'

router.get('/', getAuths)
router.get('/:id', getAuth)
router.post('/',checkApiKey, createAuth)
router.patch('/:id', updateAuth)
router.delete('/:id', deleteAuth)


export default router