import { Request, Response} from "express";
export const success = (req: Request, res: Response, message:any = '', status = 200) => {
  res.status(status).send({
    error: false,
    status,
    body: message
  })
}

export const error = (req: Request, res: Response, error:any = 'Internal server error', status = 500) => {
  res.status(status).send({
    error,
    status,
    body: false
  })
}
