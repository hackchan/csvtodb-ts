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