import { Request, Response} from "express";

export function logError(err: any, req: Request, res: Response, next: any) {
  console.log(err)
  next(err)
}
