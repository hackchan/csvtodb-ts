
// import { Request, Response, NextFunction} from "express";
// import { EntitySchema, getRepository } from "typeorm";
// import { validate } from "class-validator";
// import boom from '@hapi/boom'
// function validatorHandler(entity: any, property: any) {
//   return async (req: any, res: any, next: NextFunction) => {
//     const data = req[property]
//     const repo = getRepository(entity)
//     const objeto = repo.create(data)
//     const errors = await validate(objeto)
//     if(errors.length !== 0) {
//       const {constraints}=errors[0]
//       console.log(constraints)
//        next(constraints)
//     }

//     next()
//   }
// }

// export default validatorHandler
