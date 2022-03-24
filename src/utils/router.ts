import {Router} from 'express'
import passport from "passport";
import {checkApiKey,checkRoles} from '../middlewares/auth'
import loginRouter from '../routes/login.routes'
import routerProfile from '../routes/profile.routes'
import userRoutes from '../routes/user.routes'
import authRoutes from '../routes/auth.routes'
import departmentRoutes from '../routes/deparment.routes'
import satelitalsRoutes from '../routes/satelital.routes'
import sectorRouter from '../routes/sector.routes'
import subsectorRouter from '../routes/subsector.routes'
import tipoentidad from '../routes/tipoentidad.routes'
import entidad from '../routes/entidad.routes'
import telefono from '../routes/telefono.routes'
import email from '../routes/email.routes'
import typeuser from '../routes/tipouser.routes'

const routers = (app:any) =>{
  const router = Router()
  app.use('/api/v1',router)
  router.use('/profile',routerProfile)
  router.use('/users',
  passport.authenticate('jwt',{session:false}),
  checkRoles('admin','ssj'),
  userRoutes)
  router.use('/auth',authRoutes)
  router.use('/login',loginRouter)
  router.use('/tipouser',typeuser)


}

export default routers