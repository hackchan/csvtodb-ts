import { getRepository } from "typeorm";
import { Auth } from "../entity/auth/Auth";
import boom from '@hapi/boom'
import { validate } from "class-validator";
import bcrypt = require('bcrypt')

// export interface AuthInterface {
//    username: string;
//    password: string;
//    role: Array<string>;
//    user:Object
// }
class AuthService {
  constructor(){

  }
  async create(data: any): Promise<any> {
   try {
    const repo = getRepository(Auth)
    const auth = repo.create(data)
    const errors = await validate(auth)
    if(errors.length !== 0) {
      const {constraints}=errors[0]
      console.log(constraints)
      throw [constraints]
    }

    const hash = await bcrypt.hash(data.password,10)
    const newAuth= repo.create({...data, password:hash})
    const result = await repo.save(newAuth)
    const response = JSON.parse(JSON.stringify(result))
    delete response.password
    console.log(response)
    return response
   } catch (error) {
     throw error
   }
  }

  async findAll() {
    try {
     const Auths= await getRepository(Auth).find({ relations: ["user"]})
     return Auths
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number): Promise<Auth>{
    try {
      const auth= await getRepository(Auth).findOne(id)
      if (!auth) {
        throw boom.notFound('auth no encontrado')
      }
      return auth
    } catch (error) {
      throw error
    }
  }

  async update(id:number, changes : object) {
    const auth = await this.findOne(id)
    getRepository(Auth).merge(auth, changes)
    const result = await getRepository(Auth).save(auth)
    return result
  }

  async delete(id:number) {
    const auth = await this.findOne(id)
    const result = await getRepository(Auth).remove(auth)
    return result
  }
}

export default AuthService