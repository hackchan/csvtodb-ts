import boom from '@hapi/boom'
import { Request, Response, NextFunction} from "express";
import config from '../config'

export function checkApiKey(req: Request, res:Response, next: NextFunction){
  const apiKey = req.headers['api']
  if(apiKey === config.api.key) {
    next()
  }else{
    next(boom.unauthorized())
  }
}

export function checkRoles(...roles:any){
 return(req: Request, res:Response, next: NextFunction) =>{
    const user:any = req.user
    if(roles.includes(user.role[0])){
      next();
  }else{
    next(boom.forbidden('se requieren permisos de administrador'))
  }
 }
}