import { error } from '../../utils/response'
import { Request, Response, NextFunction} from "express";
export function boomErroHandler(err: any, req: Request, res:Response, next: NextFunction) {
  if (err.isBoom) {
    const {
      output: { statusCode, payload }
    } = err
    error(req, res, payload, statusCode)
  } else {
    next(err)
  }
}
